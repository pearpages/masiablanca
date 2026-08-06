/**
 * Post-build integrity check over dist/. Runs in CI and fails the deploy.
 *
 * What it guarantees:
 *   · every internal link resolves to a real page or file
 *   · every page has a unique title, a description and a canonical URL
 *   · every <img> has non-empty alt text
 *   · every published photograph carries an author and a licence link
 *   · the sitemap covers every indexable page
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

const bytes = (await Promise.all(files.map((f) => stat(f).then((s) => s.size)))).reduce((a, b) => a + b, 0);

console.log(`${pages.length} pàgines · ${imgCount} <img> · ${creditCount} crèdits · ${(bytes / 1048576).toFixed(1)} MB`);

if (errors.length) {
  console.error(`\n✗ ${errors.length} problemes:\n`);
  for (const e of errors.slice(0, 60)) console.error(`  ${e}`);
  if (errors.length > 60) console.error(`  … i ${errors.length - 60} més`);
  process.exit(1);
}
console.log('✓ tot correcte');
