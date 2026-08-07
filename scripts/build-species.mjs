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

const UA = 'masiablanca.soms.cat/1.0 (https://masiablanca.soms.cat; pere@soms.cat)';
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
  // Un parèntesi curt sol formar part del nom («cavallets de (la) mar»); el
  // que tanca la llista és el del binomi. Es treuen els curts abans de tallar.
  const head = extract
    .replace(/\s*\(([^)]{1,12})\)\s*/g, ' ')
    .split(/\s*\(/)[0]
    // "…, entre altres denominacions populars és una espècie…": el que ve
    // després de la fórmula no són noms, són el cos de l'article.
    .split(/,?\s+(?:entre\s+altres|és\s+un|és\s+una|són\s+un|són\s+una)\b/i)[0];
  if (!head || head.length > 320) return [];
  if (head.toLowerCase().includes(cientific.toLowerCase())) return [];

  const seen = new Set([primary?.toLowerCase()]);
  return head
    .split(/,|\so\s|\si\s|\//i)
    .map((s) =>
      s
        .trim()
        // "també conegut com a X", "també anomenada X", "dit X"…
        .replace(/^(i\s+)?(també\s+)?(és\s+)?(conegut|coneguda|coneguts|conegudes|anomenat|anomenada|anomenats|anomenades|dits|dites|dit|dita)\s+(com\s+a\s+|com\s+)?/i, '')
        // Els articles, de més llarg a més curt: amb "el" al davant, "els
        // cavalls" es quedava en "s cavalls". I amb \s* en comptes de \s+,
        // "entre altres" es quedava en "tre altres".
        .replace(/^(els|les|una|un|la|el|na|en)\s+/i, '')
        .replace(/^(l’|l')\s*/i, '')
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
  /market|\bmarche|mercat|mercado|mercato|abastos|\bventa\b|\bvenda\b|for sale|in vendita|zum verkauf|poissonn|fishmonger|pescheria|pescader|stall|lonja|subhasta/i,
  /\bdead\b|deceased|\bcatch\b|caught|angler|grilled|cooked|recipe|sushi|fillet|filet|frit|plate of|\bmeal\b|restaurant/i,
  // Speared or landed: dead and out of the water, however good the photograph.
  /chasse sous-marine|\bpeches?\b|pesca (submarina|deportiva|recreativa)|spearfish|speargun|harpoon|harpon|\barpo|\btrain[ae]\b|\d+ ?kg\b|\bcapturas?\b|capturad[oa]s?\b/i,
  // A sardine is famous as a tin, not as an animal: the food photos outnumber
  // the fish on Commons for every edible species. Catch them in the languages
  // the Mediterranean uploads in, not only in English.
  // Bare "plates" is not in here: fish have bony plates and anatomical
  // descriptions talk about them constantly.
  /\bfood\b|image of food|cuisine|cuina|cocina|culinar|gastronom|\btapas?\b|\bdish\b|\bplato\b|\bplat del?\b|recept|recette|\bserved\b|servit|servid/i,
  // «conserva» only as a whole word: «marine conservation» must survive.
  /canned|tinned|\bcan of\b|\btin of\b|\bconserv[ae]s?\b|conservera|llauna|\blata\b|boite de|eingelegt|marinat|marinad|pickled|smoked|ahumad|\bfume|salted|salting|salazon|salao|escabetx|escabech|\bbait\b|\besca\b/i,
  /\bfried\b|\bfrying\b|frit[oa]s?\b|fregit|\bbrasa|barbacoa|barbecue|\basad[oa]s?\b|assad[oa]s?\b|grelhad|graellad|\bplancha\b|planxa\b|\bhorno\b|\bforn\b|roasted|boiled|hervid|bullit/i,
  /museum|musee|museo|\bmuseu\b|specimen|skelet|squelett|esquelet|esqueleto|otolith|parasit|dissect|preserved|formalin|jar\b|taxiderm|mnhn|naturkunde|natural history|collection de/i,
  // Codis de col·lecció i de campanya que identifiquen una fotografia
  // d'exemplar de referència: Smithsonian, FDA, SERC, FSBC.
  /\busnm[- ]?\d|\bfda[ _-]?\d{2,}|\bfda\)|\bserc\b|\bfsbc\b|\bcatalog(ue)? no/i,
  // Peix mort en massa, deixalles, i el peix com a motiu artístic.
  /\bmoria\b|\bwaste\b|\bmeat\b|\bin art\b|fish kill|die-?off/i,
  // Research-survey deck shots: a fish on a measuring board is not the sea.
  /measuring board|on deck|prelevement|echantillon|sampling|acoustic response|acoustique|research (survey|cruise)|cend\d|\bstn \d|survey photo|by-?catch/i,
  /stomach|stomacal|estomac|gut content|contenu|viscer|entrail|autops|necrops|larva|larve|\begg[s]?\b|ou[s]? de|œuf|oeuf|huevos? de|egg ?case|mermaid'?s purse|ootheca|capsula/i,
  // Hatchery and laboratory work: blue tanks, tubing and labels, no sea.
  // Careful: "alevins" alone will not do — the fry photographed off the beach
  // at Argelès are as wild as the adults. The rearing context has to be there.
  /incubation|incubaci|hatchling|rearing|[ée]levage|criadero|alevinage|\bbassin|laborator|laboratoir|\blab\b|petri|microscop|in vitro/i,
  // Out of the water for good: stranded, discarded, or washed up.
  /discard|washed ashore|washed up|stranded|beached|on the beach|a la platja|carcass|carcaca|cadaver|remains of/i,
  // No bare "park"/"parque": «Parque natural da Arrábida» is open sea, not a zoo.
  // «886 Cannery Row, Monterey» és l'adreça postal de l'aquari de Monterey
  // Bay: hi ha desenes de fotos d'iNaturalist preses allà dins que no diuen
  // «aquarium» enlloc.
  /aquarium|aquaria|acuario|aquarien|akvari|\baquari|acquari|acqmilano|ecomare|sea ?life|sea ?world|marine world|oceanari|oceanogr|oceanopolis|nausicaa|marineland|loro ?parque|cannery row|\bzoo\b|captiv|\btank\b|vivarium|wildlife park|animal park|theme park|havsparken/i,
  /festival|matsuri|parade|carnival|statue|sculpture|monument|mural|graffiti|coat of arms|logo|stamp|coin|banknote|first day cover|philatel|postcard|poster/i,
  // Another animal is the subject and our fish is the prey.
  /\bsnake\b|natrix|serpent|heron|cormorant|gull\b|otter|octopus eating|predation|\beating\b|\bprey\b|being eaten/i,
  // «rangemap» va colar-se dues vegades perquè \bmap\b demana un límit de
  // paraula que «rangemap» no té, i «Prionace glauca dis.png» perquè ningú no
  // escriu «distribution» sencer al nom del fitxer.
  /\bmap\b|rangemap|range ?map|\brange of the\b|\bdis\.(png|jpe?g|svg)|distribution|chart|diagram|graph\b|infographic/i,
  // Làmines d'identificació amb la anatomia retolada. La sèrie romanesa de
  // Commons («…, ro.jpg») és la que se'n cola més: el text va sense accents
  // perquè fold() ja els ha tret.
  /inotatoare|linia laterala|radii moi|\bsolzi\b/i,
  // Microscòpia electrònica de dentículs dèrmics: als taurons, la meitat de
  // les fotos «bones» de Commons són plaques de pell a 500 µm.
  /denticle|denticul|\bsem\b|micrograf|electron microsc|\bum\b scale|scale bar/i,
  // Peces soltes: una dent, una mandíbula, una espina en una vitrina.
  /dentition of|\bzahn\b|\btooth\b|\bjaws?\b|back spine|mandibul|\bdiente\b|\bdent de\b/i,
  // Ports pesquers i llotges: el peix hi és sencer i mort, i el peu de foto
  // sovint només diu el binomi i el topònim.
  /pesqueir|puerto pesquero|port de peche|fishing port|landing site|\bwharf\b/i,
  // Campanyes de marcatge i de mostreig, i peix a l'ham.
  /researchers? (study|studying|measur|sampl|tag)|\bhooked\b|\btagged\b|\btagging\b/i,
  // Sèries fotogràfiques senceres que són sempre el mateix: les plaques de
  // pell de J. Guallart i les cobertes dels vaixells de campanya pesquera.
  // «NOAA» sol, no: la seva fototeca també té les fotos submarines dels
  // santuaris marins, que són de les millors que hi ha a Commons.
  /jguallart|\bnmfs\b|\bnefsc\b/i,
  // Escanejos de làmines de biblioteca.
  /\bnypl\b|biodiversity heritage|\bplanche\b|zoologie\./i,
  // A Commons taxon category also collects pure science: a protein first
  // described from this species ends up filed under its name.
  /\bfigure \d|\b10\.\d{4}[-/]|molecular structure|crystal structure|cartoon representation|\bprotein\b|\bpdb\b|amino acid|sequence align/i,
  // Identificadors de figura d'article i imatges d'instrumental.
  /\bpone\.\d|\bpbio\.\d|\bg\d{3}\.png|\bxrf\b|\bx-?ray\b|radiograph|inner structure|internal anatomy/i,
  // Pesca esportiva: el peix hi és viu o acabat de treure, però hi és per haver picat.
  /\bfished\b|sport ?fish|\bjigging\b|\bangling\b|\btrolling\b|\bcatch of\b/i,
  /fish ?farm|aquacultur|piscicultur|hatchery|net pen|trawl|chalut|arrossegament/i,
];

const PREFER = [/underwater|in situ|snorkel|scuba|diving|\breef\b|posidoni|seagrass|natural habitat/i];

// L'any sol, per datar una làmina antiga — però NO quan ve just darrere d'una
// coma, que és com s'escriu l'autoria taxonòmica. «Tripterygion melanurus
// Guichenot, 1850 - femelle.jpg» és una fotografia, i es donava per gravat.
const ARCHAIC =
  /(?<!,\s)\b1[6-9]\d{2}\b|lithograph|gravure|engraving|illustrat|drawing|plate \d|\bpl\.? ?\d{1,3}\b|\bfig\.? ?\d|swainson|couch|gervais|fmib|bloch|cuvier's|histoire naturelle|history of the fishes|painting|schilderij/i;

/**
 * Every filter matches text with the diacritics folded away. Otherwise
 * "marché", "Oceanário" and "gastronómica" slip past "marche", "oceanari" and
 * "gastronom", and every pattern has to be written twice — JavaScript has no
 * word boundary after an accented vowel. Binomials are ASCII: folding costs
 * nothing.
 */
const fold = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

function relevanceText(title, meta) {
  return fold(`${title.replace(/^File:/, '')} ${plain(meta.ImageDescription?.value)}`);
}

function namesThisSpecies(hay, cientific) {
  const [genus, epithet] = cientific.split(' ');
  const lower = hay.toLowerCase();
  if (lower.includes(cientific.toLowerCase())) return true;
  // "G. epithet" abbreviation, and genus + epithet appearing separately.
  if (lower.includes(`${genus[0].toLowerCase()}. ${epithet?.toLowerCase()}`)) return true;
  return lower.includes(genus.toLowerCase()) && !!epithet && lower.includes(epithet.toLowerCase());
}

/**
 * The commonest trap is another species of the same genus: files land in a
 * parent category and "Sphyraena viridensis" ends up illustrating the fitxa of
 * "Sphyraena sphyraena". If the text names a congener and never names our own
 * binomial in full, it is not our fish.
 */
function namesACongener(hay, cientific) {
  const [genus, epithet] = cientific.split(' ');
  if (!epithet) return null;
  if (hay.toLowerCase().includes(cientific.toLowerCase())) return null;
  for (const m of hay.matchAll(new RegExp(`\\b${genus}\\s+([a-z]{3,})\\b`, 'gi'))) {
    if (m[1].toLowerCase() !== epithet.toLowerCase()) return m[0];
  }
  return null;
}

/** Hard gate. Returns a reason string when the image must not be used. */
function disqualified(img, cientific, source, banned) {
  const hay = img.relevanceText;
  // Some photographs are wrong in ways no description betrays — an empty egg
  // case captioned with nothing but the binomial. "excloure" is the manual veto.
  if (banned.has(img.file)) return 'exclosa a mà (excloure)';
  const hit = DISQUALIFY.find((r) => r.test(hay));
  if (hit) return `descartada (${String(hit).slice(1, 28)}…)`;
  if (/\.(svg|gif|tiff?|ogv|webm)$/i.test(img.file)) return 'format no vàlid';
  if ((img.width ?? 0) < 700) return `massa petita (${img.width}px)`;
  // A search hit is only a guess until the file itself names the species.
  if (source === 'search' && !namesThisSpecies(hay, cientific)) return 'la cerca no confirma l’espècie';
  const congener = namesACongener(hay, cientific);
  if (congener) return `és un congènere (${congener})`;
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

async function commonsCategoryFiles(cientific, limit = 120) {
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
  const banned = new Set(
    (sp.excloure ?? []).map((f) => (f.startsWith('File:') ? f : `File:${f}`)),
  );
  const pin = sp.imatge ? (sp.imatge.startsWith('File:') ? sp.imatge : `File:${sp.imatge}`) : null;
  if (pin) candidates.set(pin, 'lead');
  if (w?.leadFile && !candidates.has(w.leadFile)) candidates.set(w.leadFile, 'lead');
  for (const t of await commonsCategoryFiles(sp.commons ?? sp.cientific)) {
    if (!candidates.has(t)) candidates.set(t, 'category');
  }
  for (const t of await commonsSearch(sp.cientific)) {
    if (!candidates.has(t)) candidates.set(t, 'search');
  }

  // The category comes back in alphabetical order and can hold hundreds of
  // files, so taking the first N picks by initial letter, not by relevance:
  // for the sardine that meant a tin, a barbecue and a laboratory long before
  // the first live fish. Files that name the binomial in their own title —
  // «Sardina pilchardus1.jpg» — are the ones an editor labelled deliberately.
  const rank = ([file, source]) =>
    source === 'lead' ? 0 : namesThisSpecies(file.replace(/^File:/, ''), sp.cientific) ? 1 : 2;
  const titles = [...candidates.entries()]
    .sort((a, b) => rank(a) - rank(b))
    .map(([t]) => t)
    .slice(0, 32);
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
    const why = disqualified(img, sp.cientific, source, banned);
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

  // Three photos of the same fish by the same author on one page is filler,
  // and Commons keeps "X.jpg" and "X (cropped).jpg" side by side: two crops of
  // one photograph are not a gallery.
  const perAuthor = new Map();
  const basePhoto = new Set();
  const chosen = [];
  for (const img of usable) {
    const base = img.file.replace(/\s*\((cropped|rotated)\)/i, '');
    if (basePhoto.has(base)) continue;
    basePhoto.add(base);
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
