/**
 * Fetches, for every species in data/species.js:
 *   · the Catalan Wikipedia article (canonical title, URL, popular names, extract)
 *   · photographs from Wikimedia Commons, with author, licence and licence URL
 *
 * Downloads the images into src/assets/peixos/<slug>/ and writes a normalised
 * src/data/species.generated.json. Both are committed, so the site build never
 * touches the network and is fully reproducible.
 *
 *   pnpm species              refresh everything
 *   pnpm species -- --only=orada,anfos
 *   pnpm species -- --force   re-download images that are already on disk
 *
 * NOTHING is written for an image whose author or licence cannot be resolved:
 * publishing a Commons photograph without correct attribution is not an option.
 */
import { mkdir, writeFile, readFile, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { SPECIES } from '../data/species.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = path.join(ROOT, 'src', 'assets', 'peixos');
const OUT = path.join(ROOT, 'src', 'data', 'species.generated.json');

const UA = 'masiablanca.pages.ninja/1.0 (https://masiablanca.pages.ninja; pere@soms.cat)';
const CA = 'https://ca.wikipedia.org/w/api.php';
const COMMONS = 'https://commons.wikimedia.org/w/api.php';

const MAX_GALLERY = 4; // lead + up to 3 more
const MAX_WIDTH = 1400; // px — twice the widest rendered slot; keeps the repo sane

const argv = process.argv.slice(2);
const FORCE = argv.includes('--force');
const ONLY = argv.find((a) => a.startsWith('--only='))?.slice(7).split(',').filter(Boolean);

// ── helpers ────────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Wikimedia throttles hard, and upload.wikimedia.org throttles separately from
 * the API. Every request goes through here: honour Retry-After, back off
 * exponentially, and never give up silently.
 */
async function get(url, { tries = 6, label = url } = {}) {
  let wait = 1000;
  for (let attempt = 1; attempt <= tries; attempt++) {
    let res;
    try {
      res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Encoding': 'gzip' } });
    } catch (err) {
      if (attempt === tries) throw err;
      await sleep(wait);
      wait *= 2;
      continue;
    }
    if (res.ok) return res;
    if (res.status === 429 || res.status >= 500) {
      const retryAfter = Number(res.headers.get('retry-after'));
      const pause = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : wait;
      if (attempt === tries) throw new Error(`${res.status} després de ${tries} intents — ${label}`);
      process.stdout.write(`\r      ${res.status}; espero ${Math.round(pause / 1000)}s…        `);
      await sleep(pause);
      wait = Math.min(wait * 2, 30_000);
      continue;
    }
    throw new Error(`${res.status} ${res.statusText} — ${label}`);
  }
  throw new Error(`no s’ha pogut baixar ${label}`);
}

async function api(base, params) {
  const url = new URL(base);
  // maxlag is the polite way to ask MediaWiki to shed load onto us instead of
  // onto everyone else. https://www.mediawiki.org/wiki/Manual:Maxlag_parameter
  url.search = new URLSearchParams({ format: 'json', formatversion: '2', maxlag: '5', ...params });
  for (let attempt = 1; attempt <= 5; attempt++) {
    const res = await get(url, { label: `${base} ${params.action ?? ''}` });
    const data = await res.json();
    if (data.error?.code === 'maxlag' || data.error?.code === 'ratelimited') {
      await sleep(2000 * attempt);
      continue;
    }
    if (data.error) throw new Error(`API ${data.error.code}: ${data.error.info}`);
    return data;
  }
  throw new Error(`API saturada — ${base}`);
}

/** Commons metadata arrives as HTML fragments. Reduce to plain text. */
function plain(html) {
  if (!html) return '';
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/** Extract the primary link target from a metadata HTML fragment, if any. */
function firstHref(html) {
  const m = /href="([^"]+)"/.exec(html ?? '');
  if (!m) return null;
  const href = m[1].startsWith('//') ? `https:${m[1]}` : m[1];
  return href.startsWith('http') ? href : `https://commons.wikimedia.org${href}`;
}

/**
 * The Viquipèdia intro is written as "El moll de roca, moll borratxo, moll
 * cranquer... (Mullus surmuletus) és una espècie...". Everything before the
 * parenthesis is the list of Catalan popular names.
 */
function popularNames(extract, cientific, primary) {
  if (!extract) return [];
  const head = extract.split(/\s*\(/)[0];
  if (!head || head.length > 320) return [];
  if (head.toLowerCase().includes(cientific.toLowerCase())) return [];

  const seen = new Set([primary?.toLowerCase()]);
  return head
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .split(/,|\so\s|\si\s|\//i)
    .map((s) =>
      s
        .trim()
        // "també conegut com a X", "també anomenada X", "dit X"…
        .replace(/^(i\s+)?(també\s+)?(és\s+)?(conegut|coneguda|coneguts|conegudes|anomenat|anomenada|anomenats|anomenades|dit|dita)\s+(com\s+a\s+|com\s+)?/i, '')
        .replace(/^(el|la|l’|l'|els|les|un|una|en|na)\s*/i, '')
        .replace(/[.;:]+$/, '')
        .trim(),
    )
    .filter((s) => {
      if (s.length < 3 || s.length > 44) return false;
      if (/^(és|són|un|una|espècie|peix)\b/i.test(s)) return false;
      const k = s.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
}

const LICENCE_FALLBACKS = {
  'cc0': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'cc-zero': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'pd': 'https://en.wikipedia.org/wiki/Public_domain',
  'public domain': 'https://en.wikipedia.org/wiki/Public_domain',
};

function licence(meta) {
  const short = plain(meta.LicenseShortName?.value) || plain(meta.UsageTerms?.value);
  const id = (meta.License?.value ?? '').toLowerCase();
  const url =
    meta.LicenseUrl?.value ??
    LICENCE_FALLBACKS[id] ??
    LICENCE_FALLBACKS[short?.toLowerCase()] ??
    null;
  const isPublicDomain = id.startsWith('pd') || /public domain/i.test(short ?? '');
  return { name: short || null, url, isPublicDomain, id: id || null };
}

function author(meta) {
  // Attribution wins when present: the uploader has asked to be credited that way.
  const raw = meta.Attribution?.value ?? meta.Artist?.value ?? '';
  const name = plain(raw);
  if (!name) return null;
  return {
    name: name.length > 120 ? `${name.slice(0, 117)}…` : name,
    url: firstHref(raw),
  };
}

/**
 * Free to reuse is not the same as fit to publish. Two gates:
 *
 *   DISQUALIFY  the photo is not of a live animal in the sea — fish stall, plate
 *               of food, aquarium tank, museum specimen, festival float, map.
 *   RELEVANCE   the photo is actually of THIS species. Commons category
 *               membership counts as an editor's assertion; a plain text search
 *               does not, so search hits must name the binomial themselves.
 */
const DISQUALIFY = [
  /market|mercat|mercado|poissonn|fishmonger|pescheria|pescader|stall|lonja|subhasta/i,
  /\bdead\b|deceased|\bcatch\b|caught|angler|grilled|cooked|recipe|sushi|fillet|filet|frit|plate of|\bmeal\b|restaurant/i,
  /museum|mus[ée]e|museo|specimen|skelet|squelett|esquelet|esqueleto|otolith|parasit|dissect|preserved|formalin|jar\b|taxiderm|mnhn|naturkunde|natural history|col{1,2}ecti[oó]n de/i,
  // Research-survey deck shots: a fish on a measuring board is not the sea.
  /measuring board|on deck|research (survey|cruise)|cend\d|\bstn \d|survey photo|by-?catch/i,
  /stomach|stomacal|estomac|gut content|contenu|viscer|entrail|autops|necrops|larva|\begg[s]?\b|ou[s]? de/i,
  /aquarium|aquária|acuario|aquarien|sea ?life|sea ?world|oceanari|oceanogr|océanopolis|oceanopolis|nausicaá|nausicaa|marineland|loro ?parque|\bzoo\b|captiv|\btank\b|vivarium|\bparque\b|\bpark\b/i,
  /festival|matsuri|parade|carnival|statue|sculpture|monument|mural|graffiti|coat of arms|logo|stamp|coin|banknote|first day cover|philatel|postcard|poster/i,
  // Another animal is the subject and our fish is the prey.
  /\bsnake\b|natrix|serpent|heron|cormorant|gull\b|otter|octopus eating|predation|\beating\b|\bprey\b|being eaten/i,
  /\bmap\b|distribution|chart|diagram|graph\b|infographic/i,
  /fish ?farm|aquacultur|piscicultur|hatchery|net pen|trawl/i,
];

const PREFER = [/underwater|in situ|snorkel|scuba|diving|\breef\b|posidoni|seagrass|natural habitat/i];

const ARCHAIC = /\b1[6-9]\d{2}\b|lithograph|gravure|engraving|illustrat|drawing|plate \d|swainson|couch|fmib|bloch|cuvier's|histoire naturelle/i;

function relevanceText(title, meta) {
  return `${title.replace(/^File:/, '')} ${plain(meta.ImageDescription?.value)}`;
}

function namesThisSpecies(hay, cientific) {
  const [genus, epithet] = cientific.split(' ');
  const lower = hay.toLowerCase();
  if (lower.includes(cientific.toLowerCase())) return true;
  // "G. epithet" abbreviation, and genus + epithet appearing separately.
  if (lower.includes(`${genus[0].toLowerCase()}. ${epithet?.toLowerCase()}`)) return true;
  return lower.includes(genus.toLowerCase()) && !!epithet && lower.includes(epithet.toLowerCase());
}

/** Hard gate. Returns a reason string when the image must not be used. */
function disqualified(img, cientific, source) {
  const hay = img.relevanceText;
  const hit = DISQUALIFY.find((r) => r.test(hay));
  if (hit) return `descartada (${String(hit).slice(1, 28)}…)`;
  if (/\.(svg|gif|tiff?|ogv|webm)$/i.test(img.file)) return 'format no vàlid';
  if ((img.width ?? 0) < 700) return `massa petita (${img.width}px)`;
  // A search hit is only a guess until the file itself names the species.
  if (source === 'search' && !namesThisSpecies(hay, cientific)) return 'la cerca no confirma l’espècie';
  // A wrong binomial in the title is a strong signal it is another animal.
  const otherBinomial = /\b([A-Z][a-z]{3,})\s([a-z]{3,})\b/.exec(img.file.replace(/^File:/, ''));
  if (
    otherBinomial &&
    !namesThisSpecies(hay, cientific) &&
    otherBinomial[0].toLowerCase() !== cientific.toLowerCase() &&
    /^(File:)?[A-Z][a-z]+ [a-z]+[ .]/.test(img.file.replace(/^File:/, ''))
  ) {
    return `sembla una altra espècie (${otherBinomial[0]})`;
  }
  return null;
}

function scoreFile(img, cientific, source) {
  const hay = img.relevanceText;
  let score = 0;
  if (source === 'lead') score += 30; // a Viquipèdia editor already chose it
  if (source === 'category') score += 6;
  if (namesThisSpecies(hay, cientific)) score += 14;
  if (PREFER.some((r) => r.test(hay))) score += 12;
  if (ARCHAIC.test(hay)) score -= 30; // usable as a fallback, never as first choice
  if ((img.width ?? 0) >= 1400) score += 8;
  else if ((img.width ?? 0) >= 1000) score += 4;
  const ratio = (img.width ?? 1) / (img.height ?? 1);
  if (ratio > 1.15 && ratio < 2.4) score += 8; // landscape reads best in the layout
  else if (ratio < 0.7) score -= 6;
  return score;
}

// ── Wikipedia ──────────────────────────────────────────────────────────────

async function fetchWikipedia(batch, lang = 'ca') {
  const data = await api(lang === 'ca' ? CA : `https://${lang}.wikipedia.org/w/api.php`, {
    action: 'query',
    prop: 'extracts|pageimages|info',
    inprop: 'url',
    exintro: '1',
    explaintext: '1',
    exsentences: '2',
    piprop: 'name',
    redirects: '1',
    titles: batch.map((s) => s.cientific).join('|'),
  });

  const q = data.query ?? {};
  const resolve = new Map();
  for (const n of q.normalized ?? []) resolve.set(n.from, n.to);
  for (const r of q.redirects ?? []) resolve.set(r.from, r.to);
  const byTitle = new Map((q.pages ?? []).map((p) => [p.title, p]));

  const out = new Map();
  for (const sp of batch) {
    let title = sp.cientific;
    for (let i = 0; i < 4 && resolve.has(title); i++) title = resolve.get(title);
    const page = byTitle.get(title);
    if (!page || page.missing) {
      out.set(sp.slug, null);
      continue;
    }
    out.set(sp.slug, {
      lang,
      title: page.title,
      url: page.fullurl ?? `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
      extract: page.extract ?? '',
      leadFile: page.pageimage ? `File:${page.pageimage.replace(/_/g, ' ')}` : null,
      // Only the Catalan article yields Catalan popular names.
      nomsPopulars: lang === 'ca' ? popularNames(page.extract, sp.cientific, sp.nom) : [],
    });
  }
  return out;
}

// ── Commons ────────────────────────────────────────────────────────────────

async function commonsInfo(titles) {
  if (titles.length === 0) return [];
  const data = await api(COMMONS, {
    action: 'query',
    titles: titles.join('|'),
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size|mime',
    iiextmetadatafilter: 'Artist|Attribution|LicenseShortName|License|LicenseUrl|UsageTerms|Credit|ImageDescription|Categories|DateTimeOriginal',
    iiurlwidth: String(MAX_WIDTH),
  });
  return (data.query?.pages ?? []).filter((p) => !p.missing && p.imageinfo?.[0]);
}

async function commonsCategoryFiles(cientific, limit = 24) {
  const data = await api(COMMONS, {
    action: 'query',
    list: 'categorymembers',
    cmtitle: `Category:${cientific}`,
    cmtype: 'file',
    cmlimit: String(limit),
  });
  return (data.query?.categorymembers ?? []).map((m) => m.title);
}

async function commonsSearch(cientific, limit = 16) {
  const data = await api(COMMONS, {
    action: 'query',
    list: 'search',
    srsearch: `${cientific} filetype:bitmap`,
    srnamespace: '6',
    srlimit: String(limit),
  });
  return (data.query?.search ?? []).map((m) => m.title);
}

function normalise(page) {
  const info = page.imageinfo[0];
  const meta = info.extmetadata ?? {};
  return {
    file: page.title,
    commonsUrl: info.descriptionurl,
    // MediaWiki happily reports an UPSCALED thumbwidth, so the only honest
    // measure of quality is the original. Fetch the original when it is small
    // enough, the capped thumbnail when it is not.
    downloadUrl: info.width <= MAX_WIDTH ? info.url : (info.thumburl ?? info.url),
    width: info.width,
    height: info.height,
    mime: info.mime,
    description: plain(meta.ImageDescription?.value).slice(0, 400) || null,
    date: plain(meta.DateTimeOriginal?.value).slice(0, 40) || null,
    author: author(meta),
    licence: licence(meta),
    relevanceText: relevanceText(page.title, meta),
  };
}

/** An image may only be published if we can name the author and the licence. */
function publishable(img) {
  if (!img.licence.name) return false;
  if (!img.licence.url) return false;
  if (!img.author && !img.licence.isPublicDomain) return false;
  if (!/^image\/(jpeg|png|webp)$/.test(img.mime ?? '')) return false;
  return true;
}

// ── images on disk ─────────────────────────────────────────────────────────

async function download(img, slug, index) {
  const dir = path.join(ASSETS, slug);
  await mkdir(dir, { recursive: true });
  const name = `${String(index).padStart(2, '0')}.jpg`;
  const dest = path.join(dir, name);

  if (existsSync(dest) && !FORCE) {
    const meta = await sharp(dest).metadata();
    return { file: `${slug}/${name}`, width: meta.width, height: meta.height };
  }

  const res = await get(img.downloadUrl, { label: img.file });
  const buf = Buffer.from(await res.arrayBuffer());
  await sleep(350); // be a good citizen on upload.wikimedia.org

  const out = await sharp(buf)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer({ resolveWithObject: true });

  await writeFile(dest, out.data);
  return { file: `${slug}/${name}`, width: out.info.width, height: out.info.height };
}

// ── main ───────────────────────────────────────────────────────────────────

const targets = ONLY ? SPECIES.filter((s) => ONLY.includes(s.slug)) : SPECIES;
console.log(`→ ${targets.length} espècies\n`);

await mkdir(ASSETS, { recursive: true });
await mkdir(path.dirname(OUT), { recursive: true });

// Wikipedia in batches of 20 (API limit is 50 titles, 20 extracts).
const wiki = new Map();
for (let i = 0; i < targets.length; i += 20) {
  const batch = targets.slice(i, i + 20);
  for (const [k, v] of await fetchWikipedia(batch)) wiki.set(k, v);
  await sleep(150);
}

// A handful of species have no Catalan article. Fall back to Spanish, then
// English, so the fitxa always offers somewhere to read more.
for (const lang of ['es', 'en']) {
  const gaps = targets.filter((s) => !wiki.get(s.slug));
  if (gaps.length === 0) break;
  for (let i = 0; i < gaps.length; i += 20) {
    for (const [k, v] of await fetchWikipedia(gaps.slice(i, i + 20), lang)) {
      if (v) wiki.set(k, v);
    }
    await sleep(150);
  }
}

const results = [];
const warnings = [];

for (const sp of targets) {
  const w = wiki.get(sp.slug) ?? null;
  if (!w) warnings.push(`${sp.slug}: sense article a cap Viquipèdia (ca/es/en)`);
  else if (w.lang !== 'ca') warnings.push(`${sp.slug}: sense article en català; s’enllaça la Viquipèdia en ${w.lang}`);

  // Candidate pool, best provenance first: a hand-pinned file, then the
  // Viquipèdia lead image, then the Commons category, then a plain search.
  /** @type {Map<string, 'lead'|'category'|'search'>} */
  const candidates = new Map();
  const pin = sp.imatge ? (sp.imatge.startsWith('File:') ? sp.imatge : `File:${sp.imatge}`) : null;
  if (pin) candidates.set(pin, 'lead');
  if (w?.leadFile && !candidates.has(w.leadFile)) candidates.set(w.leadFile, 'lead');
  for (const t of await commonsCategoryFiles(sp.commons ?? sp.cientific)) {
    if (!candidates.has(t)) candidates.set(t, 'category');
  }
  if (candidates.size < 6) {
    for (const t of await commonsSearch(sp.cientific)) {
      if (!candidates.has(t)) candidates.set(t, 'search');
    }
  }

  const titles = [...candidates.keys()].slice(0, 32);
  const pages = [];
  for (let i = 0; i < titles.length; i += 12) {
    pages.push(...(await commonsInfo(titles.slice(i, i + 12))));
    await sleep(120);
  }

  const rejected = [];
  const modern = [];
  const archaic = []; // 19th-century plates: a last resort, never a first choice
  for (const page of pages) {
    const img = normalise(page);
    const source = candidates.get(img.file) ?? 'category';
    if (!publishable(img)) {
      rejected.push(`${img.file} — sense autoria o llicència resolubles`);
      continue;
    }
    const why = disqualified(img, sp.cientific, source);
    if (why) {
      rejected.push(`${img.file} — ${why}`);
      continue;
    }
    const entry = { ...img, source, score: scoreFile(img, sp.cientific, source) };
    (ARCHAIC.test(img.relevanceText) ? archaic : modern).push(entry);
  }
  modern.sort((a, b) => b.score - a.score);
  archaic.sort((a, b) => b.score - a.score);

  // Only fall back to engravings when there is no photograph at all.
  const usable = modern.length > 0 ? modern : archaic.slice(0, 1);

  // Three photos of the same fish by the same author on one page is filler.
  const perAuthor = new Map();
  const chosen = [];
  for (const img of usable) {
    const key = img.author?.name ?? 'anon';
    const n = perAuthor.get(key) ?? 0;
    if (n >= 2 && chosen.length >= 2) continue;
    perAuthor.set(key, n + 1);
    chosen.push(img);
    if (chosen.length === MAX_GALLERY) break;
  }

  if (chosen.length === 0) {
    warnings.push(
      `${sp.slug}: CAP imatge publicable. Candidates descartades: ${rejected.slice(0, 4).join(' · ') || 'cap'}`,
    );
  } else if (modern.length === 0) {
    warnings.push(`${sp.slug}: la principal és un gravat antic (${chosen[0].file}) — busqueu-ne una de millor`);
  }
  const images = [];
  for (const [i, img] of chosen.entries()) {
    try {
      const local = await download(img, sp.slug, i);
      images.push({
        src: local.file,
        width: local.width,
        height: local.height,
        commonsFile: img.file,
        commonsUrl: img.commonsUrl,
        author: img.author,
        licence: { name: img.licence.name, url: img.licence.url },
        description: img.description,
        date: img.date,
      });
    } catch (err) {
      warnings.push(`${sp.slug}: ${img.file} — ${err.message}`);
    }
  }

  // Remove stale files from an earlier, longer gallery.
  const dir = path.join(ASSETS, sp.slug);
  if (existsSync(dir)) {
    const keep = new Set(images.map((i) => path.basename(i.src)));
    for (const f of await readdir(dir)) if (!keep.has(f)) await rm(path.join(dir, f));
  }

  results.push({
    ...sp,
    wiki: w
      ? { lang: w.lang, title: w.title, url: w.url, nomsPopulars: w.nomsPopulars }
      : { lang: null, title: null, url: null, nomsPopulars: [] },
    commonsCategoryUrl: `https://commons.wikimedia.org/wiki/Category:${encodeURIComponent(
      sp.commons ?? sp.cientific,
    ).replace(/%20/g, '_')}`,
    wormsUrl: `https://www.marinespecies.org/aphia.php?p=taxlist&searchpar=0&tComp=contains&tName=${encodeURIComponent(sp.cientific)}`,
    images,
  });

  const flag = images.length === 0 ? '  ✗' : images.length < 2 ? '  ·' : '  ✓';
  console.log(
    `${flag} ${sp.slug.padEnd(24)} ${String(images.length).padStart(2)} img   ${w?.title ?? '— sense article —'}`,
  );
}

// Merge with any species we skipped this run so the file stays complete.
let merged = results;
if (ONLY && existsSync(OUT)) {
  const prev = JSON.parse(await readFile(OUT, 'utf8'));
  const bySlug = new Map(prev.map((s) => [s.slug, s]));
  for (const r of results) bySlug.set(r.slug, r);
  merged = SPECIES.map((s) => bySlug.get(s.slug)).filter(Boolean);
}

await writeFile(OUT, `${JSON.stringify(merged, null, 2)}\n`);

const total = merged.reduce((n, s) => n + s.images.length, 0);
console.log(`\n${merged.length} espècies · ${total} imatges → src/data/species.generated.json`);

if (warnings.length) {
  console.log(`\n⚠  ${warnings.length} avisos:`);
  for (const w of warnings) console.log(`   ${w}`);
  console.log(
    '\n   Per fixar una imatge concreta, afegiu «imatge: "File:…"» a l’entrada de data/species.js\n   i torneu a executar: pnpm species -- --only=<slug> --force',
  );
}
