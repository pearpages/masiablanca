/**
 * Generates the 1200×630 Open Graph cards into public/og/.
 *
 *   pnpm og
 *
 * One card per species, built from its lead photograph, plus a default card and
 * one for each main section. Run locally and commit the result: CI never
 * regenerates these, so they do not depend on the runner's fonts.
 */
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = path.join(ROOT, 'src', 'assets', 'peixos');
const OUT = path.join(ROOT, 'public', 'og');

const W = 1200;
const H = 630;
const PAD = 72;

const SPECIES = JSON.parse(
  await readFile(path.join(ROOT, 'src', 'data', 'species.generated.json'), 'utf8'),
);

const DISPLAY = 'Helvetica Neue, Helvetica, Arial, sans-serif';
const SERIF = 'Iowan Old Style, Palatino, Georgia, serif';
const MONO = 'Menlo, Monaco, Courier New, monospace';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Break a title onto at most two lines at a sensible word boundary. */
function wrap(text, perLine) {
  if (text.length <= perLine) return [text];
  const words = text.split(' ');
  const lines = [''];
  for (const w of words) {
    const i = lines.length - 1;
    if (lines[i] && (lines[i] + ' ' + w).length > perLine && lines.length < 2) lines.push(w);
    else lines[i] = lines[i] ? `${lines[i]} ${w}` : w;
  }
  return lines;
}

function overlay({ eyebrow, title, subtitle, depth }) {
  const size = title.length > 22 ? 68 : title.length > 15 ? 84 : 96;
  const lines = wrap(title, title.length > 22 ? 20 : 26);
  const blockH = lines.length * size * 1.02;
  const baseY = H - PAD - (subtitle ? 96 : 58) - (depth ? 34 : 0);
  const startY = baseY - blockH + size * 0.82;

  const depthBar = depth
    ? (() => {
        const x = PAD;
        const yy = H - PAD - 30;
        const barW = 340;
        const scale = (m) => (Math.min(m, 25) / 25) * barW;
        return `
      <rect x="${x}" y="${yy}" width="${barW}" height="8" fill="#f7f4ee" fill-opacity="0.22"/>
      <rect x="${x + scale(4)}" y="${yy}" width="${scale(11) - scale(4)}" height="8" fill="#f7f4ee" fill-opacity="0.3"/>
      <rect x="${x + scale(depth[0])}" y="${yy}" width="${Math.max(4, scale(depth[1]) - scale(depth[0]))}" height="8" fill="#c4738c"/>
      <text x="${x + barW + 16}" y="${yy + 9}" font-family="${MONO}" font-size="19" fill="#f7f4ee" fill-opacity="0.75">${esc(depth[0])}–${esc(depth[1])} m</text>`;
      })()
    : '';

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b1b22" stop-opacity="0"/>
      <stop offset="42%" stop-color="#0b1b22" stop-opacity="0.35"/>
      <stop offset="78%" stop-color="#0b1b22" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="#0b1b22" stop-opacity="0.97"/>
    </linearGradient>
    <linearGradient id="side" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0b1b22" stop-opacity="0.72"/>
      <stop offset="55%" stop-color="#0b1b22" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#0b1b22" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#side)"/>
  <rect width="${W}" height="${H}" fill="url(#scrim)"/>
  <rect x="0" y="0" width="10" height="${H}" fill="#c4738c"/>

  <text x="${PAD}" y="${PAD + 12}" font-family="${MONO}" font-size="21" letter-spacing="3.4"
        fill="#e9a5b6">${esc(eyebrow.toUpperCase())}</text>

  ${lines
    .map(
      (l, i) =>
        `<text x="${PAD}" y="${startY + i * size * 1.02}" font-family="${DISPLAY}" font-size="${size}" font-weight="700" letter-spacing="-2.6" fill="#f7f4ee">${esc(l)}</text>`,
    )
    .join('\n  ')}

  ${
    subtitle
      ? `<text x="${PAD}" y="${baseY + 46}" font-family="${SERIF}" font-style="italic" font-size="40" fill="#f7f4ee" fill-opacity="0.82">${esc(subtitle)}</text>`
      : ''
  }
  ${depthBar}
</svg>`);
}

async function card({ photo, out, ...text }) {
  const base = photo
    ? sharp(photo).resize(W, H, { fit: 'cover', position: 'attention' })
    : sharp({
        create: { width: W, height: H, channels: 3, background: '#102a31' },
      });

  const buf = await base
    .modulate({ saturation: 0.94 })
    .composite([{ input: overlay(text), top: 0, left: 0 }])
    .png({ compressionLevel: 9, palette: true, quality: 88 })
    .toBuffer();

  await writeFile(path.join(OUT, out), buf);
  return buf.length;
}

await mkdir(OUT, { recursive: true });

let bytes = 0;
for (const s of SPECIES) {
  const lead = s.images[0];
  bytes += await card({
    photo: lead ? path.join(ASSETS, lead.src) : null,
    out: `${s.slug}.png`,
    eyebrow: 'Peixos de la Masia Blanca',
    title: s.nom,
    subtitle: s.cientific,
    depth: s.profunditat,
  });
}
console.log(`${SPECIES.length} fitxes d’espècie`);

const pick = (slug) => {
  const s = SPECIES.find((x) => x.slug === slug);
  return s?.images[0] ? path.join(ASSETS, s.images[0].src) : null;
};

const SECTIONS = [
  {
    out: 'default.png',
    photo: pick('anfos'),
    eyebrow: 'El Vendrell · Coma-ruga',
    title: 'Reserva marina de la Masia Blanca',
    subtitle: 'El grapissar del Vendrell',
  },
  {
    out: 'peixos.png',
    photo: pick('castanyola'),
    eyebrow: 'Catàleg il·lustrat',
    title: `Els ${SPECIES.length} peixos del grapissar`,
    subtitle: 'Reserva marina de la Masia Blanca',
  },
  {
    out: 'historia.png',
    photo: pick('corball-de-roca'),
    eyebrow: '1999 → avui',
    title: 'Com es protegeix un tros de mar',
    subtitle: 'Reserva marina de la Masia Blanca',
  },
  {
    out: 'el-grapissar.png',
    photo: pick('cap-roig'),
    eyebrow: 'El lloc',
    title: 'Una roca que les algues han fet',
    subtitle: 'El grapissar del Vendrell',
  },
  {
    out: 'visitar.png',
    photo: pick('cavall-de-mar'),
    eyebrow: 'A la pràctica',
    title: 'Mirar sense agafar res',
    subtitle: 'Reserva marina de la Masia Blanca',
  },
];

for (const s of SECTIONS) bytes += await card(s);
console.log(`${SECTIONS.length} seccions`);
console.log(`\n→ public/og/  ·  ${(bytes / 1048576).toFixed(1)} MB en total`);
