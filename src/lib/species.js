/** Access layer over the generated catalogue. */
import raw from '../data/species.generated.json';
import { HABITATS, habitatById } from './site.js';

/** Every image file eagerly resolved so astro:assets can optimise it. */
const FILES = import.meta.glob('../assets/peixos/**/*.jpg', {
  eager: true,
  import: 'default',
});

const asset = (src) => FILES[`../assets/peixos/${src}`] ?? null;

/**
 * D'on surt que aquesta espècie hi és. Amb dues-centes fitxes, la nota general
 * de /peixos —«no és un cens»— ja no basta: el lector ha de poder distingir
 * l'anfós, que la documentació del Ministeri anomena, del solraig, que és una
 * possibilitat de pas.
 */
export const EVIDENCIA = {
  oficial: {
    curt: 'Citada',
    nom: 'La documentació oficial la cita',
    detall:
      'La fitxa o la web del Ministeri, o l’article de la Viquipèdia sobre la reserva, anomenen ' +
      'aquesta espècie explícitament.',
  },
  registrada: {
    curt: 'Registrada',
    nom: 'Amb registre al litoral tarragoní',
    detall:
      'Hi ha registres d’aquesta espècie a la base de dades OBIS dins d’una caixa que va de ' +
      'Cambrils a Sitges. Prova que és en aquestes aigües, no que sigui dins la reserva.',
  },
  habitat: {
    curt: 'Per hàbitat',
    nom: 'Compatible amb els hàbitats de la reserva',
    detall:
      'Espècie pròpia dels ambients que la reserva té documentats —barres de roca biogènica, ' +
      'herbeis i fons tous fins als 25 m— i coneguda d’aquests ambients a la costa catalana.',
  },
  visitant: {
    curt: 'Visitant',
    nom: 'Pelàgica o de pas',
    detall:
      'No hi resideix: és una espècie de mar obert que pot entrar-hi seguint el peix o els ' +
      'corrents. Cap reserva marina no protegeix un peix que hi passa.',
  },
};

const IUCN = {
  LC: { curt: 'LC', nom: 'Risc mínim', to: 0 },
  NT: { curt: 'NT', nom: 'Gairebé amenaçada', to: 1 },
  VU: { curt: 'VU', nom: 'Vulnerable', to: 2 },
  EN: { curt: 'EN', nom: 'En perill', to: 3 },
  CR: { curt: 'CR', nom: 'En perill crític', to: 4 },
  DD: { curt: 'DD', nom: 'Dades insuficients', to: -1 },
};

const fold = (s) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

function hydrate(entry) {
  const images = entry.images
    .map((img) => ({ ...img, asset: asset(img.src) }))
    .filter((img) => img.asset);

  /**
   * Els altres noms catalans que la Viquipèdia dóna a l'espècie, sense repetir
   * el principal. Són el que fa que qui busqui «mero», «aladroc» o «clavellada»
   * trobi l'anfós, el seitó i la rajada de clavells.
   */
  const altresNoms = [
    ...new Map(
      (entry.wiki?.nomsPopulars ?? [])
        .filter((n) => fold(n) !== fold(entry.nom))
        .map((n) => [fold(n), n]),
    ).values(),
  ];

  return {
    ...entry,
    images,
    altresNoms,
    lead: images[0] ?? null,
    galeria: images.slice(1),
    habitatInfo: habitatById(entry.habitat),
    iucnInfo: entry.iucn ? IUCN[entry.iucn] : null,
    evidenciaInfo: EVIDENCIA[entry.evidencia] ?? EVIDENCIA.habitat,
    url: `/peixos/${entry.slug}`,
    /** "4 – 11 m" */
    profunditatText: `${entry.profunditat[0]} – ${entry.profunditat[1]} m`,
    /** Alt text that describes the photograph, in Catalan. */
    altText: `${entry.nom} (${entry.cientific}) fotografiat sota l’aigua`,
  };
}

export const ALL = raw.map(hydrate);

export const BY_SLUG = new Map(ALL.map((s) => [s.slug, s]));

/** Catalogue grouped in the order you meet the habitats swimming out. */
export const GROUPED = HABITATS.map((h) => ({
  ...h,
  species: ALL.filter((s) => s.habitat === h.id).sort((a, b) => a.nom.localeCompare(b.nom, 'ca')),
})).filter((g) => g.species.length > 0);

export const WITH_IUCN = ALL.filter((s) => s.iucnInfo && s.iucnInfo.to >= 1).sort(
  (a, b) => b.iucnInfo.to - a.iucnInfo.to,
);

/** Every distinct photograph on the site, for the credits page. */
export const ALL_IMAGES = ALL.flatMap((s) =>
  s.images.map((img) => ({ ...img, species: s })),
).sort((a, b) => a.species.nom.localeCompare(b.species.nom, 'ca'));

/** Licences actually in use, counted — rendered as a summary on /credits. */
export const LICENCE_SUMMARY = [
  ...ALL_IMAGES.reduce((map, img) => {
    const key = img.licence.name;
    const prev = map.get(key) ?? { name: key, url: img.licence.url, count: 0 };
    prev.count += 1;
    return map.set(key, prev);
  }, new Map()).values(),
].sort((a, b) => b.count - a.count);

/** Two neighbours in the same habitat, for the "continue reading" strip. */
export function neighbours(slug) {
  const me = BY_SLUG.get(slug);
  if (!me) return [];
  const pool = ALL.filter((s) => s.habitat === me.habitat && s.slug !== slug);
  const i = pool.findIndex((s) => s.nom.localeCompare(me.nom, 'ca') > 0);
  const start = i < 0 ? 0 : i;
  const picked = [...pool.slice(start), ...pool.slice(0, start)].slice(0, 3);
  return picked.length > 0 ? picked : ALL.filter((s) => s.slug !== slug).slice(0, 3);
}
