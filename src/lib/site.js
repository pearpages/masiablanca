/** Site-wide constants and the reserve's hard data, cited to their source. */

export const SITE = {
  url: 'https://masiablanca.pages.ninja',
  name: 'La Masia Blanca',
  longName: 'Reserva marina de la Masia Blanca',
  tagline: 'El grapissar del Vendrell',
  lang: 'ca',
  locale: 'ca_ES',
  description:
    'El grapissar de la Masia Blanca, davant de Coma-ruga i el Francàs (el Vendrell): història, ' +
    'context i catàleg il·lustrat dels peixos de la primera reserva marina de la costa catalana.',
};

/** Centre of the integral reserve — Ordre de 21 de desembre de 1999. */
export const CENTRE = {
  latDMS: "41° 10′ 27″ N",
  lonDMS: "1° 30′ 40,2″ E",
  lat: 41.174167,
  lon: 1.511167,
};

export const FACTS = {
  declarada: '1999',
  boe: '8 de gener del 2000',
  superficie: 457, // ha
  radiIntegral: 0.2, // milles nàutiques
  radiTotal: 0.8, // milles nàutiques
  amplaAmortiment: 0.6, // milles nàutiques
  fondariaMax: 25, // m
  barresMin: 4, // m
  barresMax: 11, // m
};

export const NAV = [
  { href: '/historia', label: 'Història' },
  { href: '/el-grapissar', label: 'El grapissar' },
  { href: '/peixos', label: 'Els peixos' },
  { href: '/visitar', label: 'Visitar-la' },
];

export const FOOTER_NAV = [
  { href: '/credits', label: 'Crèdits de les imatges' },
  { href: '/fonts', label: 'Fonts i referències' },
];

/**
 * Habitat groups. The order is the order you meet them swimming out from the
 * beach, which is also the order they appear in the catalogue.
 */
export const HABITATS = [
  {
    id: 'roca',
    nom: 'El grapissar rocós',
    curt: 'Grapissar',
    profunditat: '4 – 11 m',
    color: 'var(--h-roca)',
    resum:
      'Les barres de roca biogènica, perpendiculars a la costa, plenes de forats i cornises. ' +
      'És el cor de la reserva i on hi ha més densitat i més varietat de peixos.',
  },
  {
    id: 'praderia',
    nom: 'Les praderies',
    curt: 'Praderies',
    profunditat: '3 – 18 m',
    color: 'var(--h-praderia)',
    resum:
      'Els herbeis de posidònia i de cimodocea que envolten la roca. Fan de bressol: molts ' +
      'dels peixos que hi veureu són juvenils que encara no han passat a la roca.',
  },
  {
    id: 'sorra',
    nom: 'Els fons de sorra i fang',
    curt: 'Sorra',
    profunditat: '2 – 25 m',
    color: 'var(--h-sorra)',
    resum:
      'La matriu on s’assenta tota la resta. Sembla buida i no ho és: hi viu una fauna ' +
      'especialitzada a enterrar-se, camuflar-se i esperar.',
  },
  {
    id: 'columna',
    nom: 'La columna d’aigua',
    curt: 'Aigua lliure',
    profunditat: '0 – 25 m',
    color: 'var(--h-columna)',
    resum:
      'Els peixos que no toquen mai el fons: els bancs de peix blau i els depredadors ràpids ' +
      'que hi entren a caçar des de mar obert.',
  },
  {
    id: 'elasmo',
    nom: 'Rajades i taurons',
    curt: 'Elasmobranquis',
    profunditat: '5 – 25 m',
    color: 'var(--h-elasmo)',
    resum:
      'Els peixos cartilaginosos. Són els grans perdedors de la pesca d’arrossegament i, ' +
      'precisament per això, els que més tenen a guanyar amb una reserva com aquesta.',
  },
];

export const habitatById = (id) => HABITATS.find((h) => h.id === id);

/**
 * Everything used to write this site. Rendered in full at /fonts and cited
 * inline by key.
 */
export const SOURCES = [
  {
    key: 'boe-1999',
    tipus: 'Norma',
    titol:
      'Orden de 21 de diciembre de 1999 por la que se establece la reserva marina de Masía Blanca, ' +
      'frente al término municipal de El Vendrell (Tarragona)',
    editor: 'Boletín Oficial del Estado, núm. 7, 8 de gener del 2000',
    url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2000-398',
  },
  {
    key: 'boe-2007',
    tipus: 'Norma',
    titol:
      'Orden APA/1993/2007, de 26 de junio, por la que se prorroga la veda establecida por la ' +
      'Orden de 21 de diciembre de 1999',
    editor: 'Boletín Oficial del Estado',
    url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2007-13080',
  },
  {
    key: 'boe-2023',
    tipus: 'Norma',
    titol:
      'Orden APA/592/2023, de 1 de junio, por la que se prorroga la veda establecida por la ' +
      'Orden de 21 de diciembre de 1999',
    editor: 'Boletín Oficial del Estado',
    url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-13923',
  },
  {
    key: 'mapa-fitxa',
    tipus: 'Document oficial',
    titol: 'Masía Blanca — Red de Reservas Marinas de España (fullet divulgatiu, 2021)',
    editor: 'Ministerio de Agricultura, Pesca y Alimentación · Secretaría General de Pesca',
    url: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/masia-blanca/2021_fch_masiablanca.pdf',
    nota:
      'Font principal per a la descripció física del grapissar: barres biogèniques entre 4 i 11 m, ' +
      'paper constructor de Mesophyllum alternans i xifra de 449 ha en aigües exteriors.',
  },
  {
    key: 'mapa-web',
    tipus: 'Web oficial',
    titol: 'Reserva marina de Masía Blanca — Características',
    editor: 'Ministerio de Agricultura, Pesca y Alimentación',
    url: 'https://www.mapa.gob.es/es/pesca/temas/proteccion-recursos-pesqueros/reservas-marinas-de-espana/masia-blanca/caracteristicas',
    nota: 'Font de les coordenades del centre, la zonificació i la superfície de 457 ha.',
  },
  {
    key: 'viqui-reserva',
    tipus: 'Enciclopèdia',
    titol: 'Reserva marina de la Masia Blanca',
    editor: 'Viquipèdia, l’enciclopèdia lliure',
    url: 'https://ca.wikipedia.org/wiki/Reserva_marina_de_la_Masia_Blanca',
    nota: 'Text disponible sota llicència CC BY-SA 4.0.',
  },
  {
    key: 'vilaweb-2000',
    tipus: 'Premsa',
    titol: 'El grapissar de la Masia Blanca, a Coma-ruga, és declarat reserva marina',
    editor: 'VilaWeb, 20 de gener del 2000',
    url: 'https://www.vilaweb.cat/noticia/1125291/20000120/grapissar-masia-blanca-coma-ruga-declarada-reserva-marina.html',
    nota:
      'Crònica de la declaració. És la font de «la primera zona submergida aïllada i preservada ' +
      'de tot el litoral català» i de les xifres de 278 ha de roca i 14,5 m de fondària.',
  },
  {
    key: 'diari-tarragona',
    tipus: 'Premsa',
    titol:
      '24 años de reserva marina de Coma-ruga: urge vigilancia contra furtivos y recuperar los ' +
      'estudios del ecosistema',
    editor: 'Diari de Tarragona',
    url: 'https://www.diaridetarragona.com/costa/218845/24-anos-de-reserva-marina-de-coma-ruga-urge-vigilancia-contra-furtivos-y-recuperar-los-estudios-del-ecosistema-gf20522411.html',
    nota: 'Estat actual de la vigilància i del seguiment científic.',
  },
  {
    key: 'elvendrell',
    tipus: 'Web institucional',
    titol: 'Reserva marina de la Masia Blanca i Aula Aquàtica',
    editor: 'El Vendrell Turisme · Ajuntament del Vendrell',
    url: 'https://www.elvendrellturisme.com/ca/reserva-marina-de-la-masia-blanca/',
  },
  {
    key: 'costadaurada',
    tipus: 'Web institucional',
    titol: 'Reserva marina Masia Blanca',
    editor: 'Patronat de Turisme de la Diputació de Tarragona — Costa Daurada',
    url: 'https://costadaurada.info/en/activities/beaches-and-coves/coastal-nature-reserves/reserva-marina-masia-blanca',
  },
  {
    key: 'iepnb',
    tipus: 'Base de dades',
    titol: 'Reserva Marina de Masía Blanca — Espacios Naturales Protegidos (CDDA 555552489)',
    editor: 'Inventario Español del Patrimonio Natural y de la Biodiversidad',
    url: 'https://iepnb.es/areas-tematicas/espacios-protegidos/555552489_CDDA/reserva-marina-de-mas%C3%ADa-blanca',
  },
  {
    key: 'busgarraf',
    tipus: 'Divulgació',
    titol: 'Descubre la reserva marina de la Masia Blanca, la joya submarina del Vendrell',
    editor: 'Bus Garraf',
    url: 'https://busgarraf.cat/es/descubre-la-reserva-marina-de-la-masia-blanca-la-joya-submarina-del-vendrell/',
  },
  {
    key: 'viqui-especies',
    tipus: 'Enciclopèdia',
    titol: 'Articles d’espècies de la Viquipèdia en català',
    editor: 'Viquipèdia, l’enciclopèdia lliure',
    url: 'https://ca.wikipedia.org/wiki/Portal:Peixos',
    nota:
      'Els noms populars catalans de cada espècie del catàleg s’han pres dels articles ' +
      'corresponents de la Viquipèdia, enllaçats un a un des de cada fitxa. Text sota CC BY-SA 4.0.',
  },
  {
    key: 'commons',
    tipus: 'Repositori d’imatges',
    titol: 'Wikimedia Commons',
    editor: 'Wikimedia Foundation',
    url: 'https://commons.wikimedia.org/',
    nota:
      'Totes les fotografies del catàleg provenen de Commons i es publiquen aquí amb l’autoria i ' +
      'la llicència originals. Vegeu la pàgina de crèdits per al detall imatge per imatge.',
  },
  {
    key: 'worms',
    tipus: 'Base de dades',
    titol: 'World Register of Marine Species (WoRMS)',
    editor: 'WoRMS Editorial Board',
    url: 'https://www.marinespecies.org/',
    nota: 'Referència taxonòmica per als noms científics i les autories.',
  },
];

export const sourceByKey = (key) => SOURCES.find((s) => s.key === key);
