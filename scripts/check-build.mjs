/**
 * Post-build integrity check over dist/. Runs in CI and fails the deploy.
 *
 * What it guarantees:
 *   · every internal link resolves to a real page or file
 *   · every page has a unique title, a description and a canonical URL
 *   · every <img> has non-empty alt text
 *   · every published photograph carries an author and a licence link
 *   · no two species claim each other's Catalan name
 *   · the sitemap covers every indexable page
 *
 * With --external it also HEADs every outbound link and flags anything that is
 * not a plain 200, redirects included. That pass is deliberately out of CI:
 * the deploy must not depend on someone else's server being up.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://masiablanca.soms.cat';

const errors = [];
const fail = (msg) => errors.push(msg);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error('dist/ no existeix — executeu pnpm build primer');
  process.exit(1);
}

const files = await walk(DIST);
const pages = files.filter((f) => f.endsWith('.html'));
const rel = (f) => `/${path.relative(DIST, f).replace(/\/?index\.html$/, '').replace(/\.html$/, '')}`;

const titles = new Map();
const linkTargets = new Set(files.map((f) => rel(f)));
for (const f of files) linkTargets.add(`/${path.relative(DIST, f)}`);

let imgCount = 0;
let creditCount = 0;

for (const file of pages) {
  const url = rel(file) || '/';
  const html = await readFile(file, 'utf8');

  // ---- head -------------------------------------------------------------
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1];
  if (!title) fail(`${url}: sense <title>`);
  else if (titles.has(title)) fail(`${url}: <title> duplicat amb ${titles.get(title)} — «${title}»`);
  else titles.set(title, url);

  const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1];
  if (!desc || desc.length < 50) fail(`${url}: meta description absent o massa curta`);
  if (desc && desc.length > 320) fail(`${url}: meta description massa llarga (${desc.length})`);

  const canonical = /<link rel="canonical" href="([^"]*)"/.exec(html)?.[1];
  if (!canonical) fail(`${url}: sense canonical`);
  else if (!canonical.startsWith(SITE)) fail(`${url}: canonical fora del domini — ${canonical}`);

  if (!/<html lang="ca">/.test(html)) fail(`${url}: <html> sense lang="ca"`);

  const h1 = html.match(/<h1[^>]*>/g) ?? [];
  if (h1.length !== 1) fail(`${url}: ${h1.length} elements h1 (n'hi ha d'haver exactament 1)`);

  // ---- images -----------------------------------------------------------
  for (const tag of html.match(/<img[^>]*>/g) ?? []) {
    imgCount++;
    const alt = /alt="([^"]*)"/.exec(tag)?.[1];
    // Una imatge decorativa HA de portar alt="" perquè els lectors de pantalla
    // la saltin; només és un error si no s'hi marca explícitament com a tal.
    const decorative = /aria-hidden="true"|role="presentation"/.test(tag);
    if (alt === undefined) fail(`${url}: <img> sense atribut alt`);
    else if (alt.trim() === '' && !decorative) {
      fail(`${url}: <img> amb alt buit i sense aria-hidden/role="presentation"`);
    }
    if (!/width="/.test(tag) || !/height="/.test(tag)) {
      fail(`${url}: <img> sense width/height (provoca CLS)`);
    }
  }

  // ---- attribution ------------------------------------------------------
  for (const credit of html.match(/<span class="credit[^"]*"[\s\S]*?<\/span>\s*<\/(figcaption|div|p|td)>/g) ?? []) {
    creditCount++;
    // Any named licence with a resolvable link is acceptable — Commons hosts
    // more than Creative Commons (OGL, FAL, PD-*). Attribute order varies, so
    // inspect each anchor rather than assuming href comes after rel.
    const licensed = (credit.match(/<a\s[^>]*>/g) ?? []).some(
      (a) => /rel="[^"]*\blicense\b[^"]*"/.test(a) && /href="https?:\/\//.test(a),
    );
    if (!licensed && !/Domini públic|Public domain/.test(credit)) {
      fail(`${url}: crèdit sense llicència enllaçada`);
    }
    if (!/commons\.wikimedia\.org/.test(credit)) fail(`${url}: crèdit sense enllaç a Commons`);
  }

  // ---- internal links ---------------------------------------------------
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const target = m[1].replace(/\/$/, '') || '/';
    if (target.startsWith('/_astro/')) continue;
    if (!linkTargets.has(target) && !existsSync(path.join(DIST, target))) {
      fail(`${url}: enllaç trencat cap a ${target}`);
    }
  }
}

// ---- sitemap ------------------------------------------------------------
const sitemapFile = files.find((f) => /sitemap-\d+\.xml$/.test(f));
if (!sitemapFile) fail('no s’ha generat cap sitemap-N.xml');
else {
  const xml = await readFile(sitemapFile, 'utf8');
  const locs = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/\/$/, '')));
  for (const [, url] of titles) {
    if (url === '/404') continue;
    const full = `${SITE}${url === '/' ? '' : url}`;
    if (!locs.has(full)) fail(`sitemap: hi falta ${full}`);
  }
}

// ---- attribution data ---------------------------------------------------
const species = JSON.parse(
  await readFile(path.join(ROOT, 'src', 'data', 'species.generated.json'), 'utf8'),
);
for (const s of species) {
  for (const img of s.images) {
    if (!img.licence?.name || !img.licence?.url) fail(`${s.slug}: ${img.commonsFile} sense llicència`);
    const pd = /public domain|cc0/i.test(img.licence?.name ?? '');
    if (!img.author && !pd) fail(`${s.slug}: ${img.commonsFile} sense autoria`);
    if (!img.commonsUrl) fail(`${s.slug}: ${img.commonsFile} sense URL de Commons`);
  }
}

// ---- el nom d'un peix no pot ser el d'un altre --------------------------
// Fins a l'agost del 2026, Umbrina cirrosa es deia «Reig», Trachinus draco
// «Aranya de cap negre» i Chelon labrosus «Llissa llobarrera». Tots tres són
// el nom que la Viquipèdia dóna a una ALTRA espècie (Argyrosomus regius,
// Trachinus radiatus i Mugil cephalus). El guió ja baixava el nom bo a
// wiki.title i ningú no els comparava.
//
// No es comprova que `nom` coincideixi amb el de la Viquipèdia: els noms
// catalans dels peixos són molt regionals i la Viquipèdia només en tria un
// («Sarcotell» per al sarg, «Guiula» per a la donzella). El que no pot
// passar és que dues fitxes es disputin el mateix nom.
const fold = (t) => t.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
const base = (t) => fold(String(t).replace(/\s*\(.*\)\s*$/, ''));

const claimed = new Map(); // nom plegat → slug que el reclama com a `nom`
for (const s of species) {
  const k = base(s.nom);
  if (claimed.has(k)) fail(`${s.slug} i ${claimed.get(k)} es diuen tots dos «${s.nom}»`);
  else claimed.set(k, s.slug);
}

// Només contra wiki.title, el nom principal. Els noms populars se solapen
// legítimament entre espècies —«tord», «agulla» i «milà» en designen més
// d'una— i comparar-hi donaria falsos positius per a fitxes correctes.
for (const s of species) {
  if (s.wiki?.lang !== 'ca') continue; // fitxa caiguda a es/en: el guió ja avisa
  const owner = claimed.get(base(s.wiki.title ?? ''));
  if (owner && owner !== s.slug)
    fail(`${owner}: es diu «${s.wiki.title}», que és el nom que la Viquipèdia dóna a ${s.cientific} (${s.slug})`);
}

// ---- enllaços externs (opcional: --external) ----------------------------
// No entra a CI: el desplegament no pot dependre que la Viquipèdia respongui.
// Es passa a mà de tant en tant, i sobretot abans de publicar.
//
// Els 301 també compten com a problema. El peu del lloc va apuntar durant
// mesos a elvendrellturisme.com/ca/, que redirigia a la fitxa d'una cafeteria:
// un redirect d'avui és un enllaç trencat de demà.
if (process.argv.includes('--external')) {
  const urls = new Set();
  for (const f of pages) {
    const html = await readFile(f, 'utf8');
    for (const m of html.matchAll(/href="(https?:\/\/[^"]+)"/g)) {
      const u = m[1].replace(/&amp;/g, '&');
      // El domini propi surt a cada canonical i a cada enllaç del menú: els
      // enllaços interns ja es comproven contra dist/, i mentre el lloc no
      // estigui publicat totes aquestes URL farien 404.
      if (u.startsWith(SITE)) continue;
      // Commons i la Viquipèdia surten milers de vegades i sempre responen:
      // se'n comprova una de cada, no totes.
      if (/^https?:\/\/(commons\.wikimedia|[a-z-]+\.wikipedia)\.org/.test(u)) continue;
      urls.add(u);
    }
  }
  urls.add('https://commons.wikimedia.org/wiki/Main_Page');
  urls.add('https://ca.wikipedia.org/wiki/Categoria:Peixos');

  const list = [...urls].sort();
  process.stdout.write(`\ncomprovant ${list.length} enllaços externs`);
  const broken = [];
  const moved = [];
  for (let i = 0; i < list.length; i += 6) {
    await Promise.all(
      list.slice(i, i + 6).map(async (u) => {
        for (const method of ['HEAD', 'GET']) {
          try {
            const r = await fetch(u, {
              method,
              redirect: 'manual',
              headers: { 'User-Agent': 'masiablanca-check/1.0 (+https://masiablanca.soms.cat)' },
              signal: AbortSignal.timeout(20000),
            });
            if (r.status === 200) return;
            // Alguns servidors no admeten HEAD: es torna a provar amb GET.
            if ((r.status === 405 || r.status === 403) && method === 'HEAD') continue;
            // 403 i 429 són el servidor dient que no li agraden els robots, no
            // que l'enllaç estigui trencat: iNaturalist ho fa amb tots.
            if (r.status === 403 || r.status === 429) return;
            if (r.status >= 300 && r.status < 400) {
              moved.push([u, r.status, r.headers.get('location') ?? '']);
              return;
            }
            broken.push(`${u} → ${r.status}`);
            return;
          } catch (e) {
            if (method === 'GET') broken.push(`${u} → ${e.name === 'TimeoutError' ? 'sense resposta' : e.message}`);
          }
        }
      }),
    );
    process.stdout.write('.');
  }
  process.stdout.write('\n');

  // Les pàgines personals dels fotògrafs venen del camp Artist de Commons i
  // es podreixen soles. L'atribució que exigeix la llicència és el nom, que
  // hi és igualment, de manera que un enllaç d'autoria mort és un avís i no
  // un error. La resta d'enllaços sí que els hem triat nosaltres.
  const authorUrls = new Set(
    species.flatMap((s) => s.images.map((i) => i.author?.url).filter(Boolean)),
  );
  const rotten = broken.filter((p) => authorUrls.has(p.split(' → ')[0]));
  for (const p of broken.filter((p) => !rotten.includes(p)).sort())
    fail(`enllaç extern: ${p}`);
  if (rotten.length) {
    console.log(`\n⚠ ${rotten.length} enllaços d'autoria morts (l'atribució pel nom es manté):`);
    for (const p of rotten.sort()) console.log(`  ${p}`);
  }

  // Els redirects no fan fallar res: WoRMS, per exemple, redirigeix cada URL
  // de cerca a la fitxa del tàxon, que és el que ha de fer. Però es llisten,
  // agrupats per amfitrió, perquè un redirect és el pas previ a un 404 —i
  // perquè així es veu de seguida quan un porta on no toca.
  if (moved.length) {
    const byHost = new Map();
    for (const [u, code, to] of moved) {
      const h = new URL(u).host;
      if (!byHost.has(h)) byHost.set(h, { n: 0, ex: [u, code, to] });
      byHost.get(h).n += 1;
    }
    console.log(`\n↻ ${moved.length} enllaços amb redirecció (no fan fallar la comprovació):`);
    for (const [h, { n, ex }] of [...byHost].sort((a, b) => b[1].n - a[1].n))
      console.log(`  ${h} · ${n}\n      ${ex[0]}\n      → ${ex[1]} ${ex[2]}`);
  }
}

const bytes = (await Promise.all(files.map((f) => stat(f).then((s) => s.size)))).reduce((a, b) => a + b, 0);

console.log(`${pages.length} pàgines · ${imgCount} <img> · ${creditCount} crèdits · ${(bytes / 1048576).toFixed(1)} MB`);

if (errors.length) {
  console.error(`\n✗ ${errors.length} problemes:\n`);
  for (const e of errors.slice(0, 60)) console.error(`  ${e}`);
  if (errors.length > 60) console.error(`  … i ${errors.length - 60} més`);
  process.exit(1);
}
console.log('✓ tot correcte');
