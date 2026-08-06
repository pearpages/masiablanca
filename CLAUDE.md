# masiablanca.soms.cat

Lloc estàtic divulgatiu, **tot en català**, sobre la reserva marina de la Masia Blanca — el
grapissar del Vendrell, davant de Coma-ruga i el Francàs. Història, context i catàleg il·lustrat
de 69 espècies de peixos amb enllaç a la Viquipèdia i fotografies de Wikimedia Commons
degudament atribuïdes.

## Ordres

```bash
pnpm dev        # servidor de desenvolupament
pnpm build      # compila a dist/
pnpm check      # build + comprovacions d'integritat (això és el que corre a CI)
pnpm preview    # serveix dist/

pnpm species    # torna a baixar el catàleg de la Viquipèdia i Commons  ← manual, no a CI
pnpm og         # regenera les targetes Open Graph a public/og/         ← manual, no a CI
pnpm fonts      # torna a baixar els subconjunts woff2 a public/fonts/  ← manual, no a CI
```

El toolchain el fixa `mise.toml` (node 24.16.0, pnpm 11.15.0). No hi ha instal·lacions globals.

## Regles del projecte

- **Res d'estils en línia.** Cap `style={{…}}`, cap CSS-in-JS. Els tokens són a
  `src/styles/tokens.css`; cada component té el seu `.css` al costat i s'importa des del `.astro`.
  L'única excepció admesa és `style={\`--key:…\`}` per passar una variable CSS d'hàbitat.
- **Cap imatge sense atribució.** `Figure.astro` incorpora `Credit.astro`: no hi ha manera de
  publicar una foto sense el crèdit. `scripts/check-build.mjs` ho verifica i fa fallar el
  desplegament si en falta cap.
- **La compilació no toca la xarxa.** `src/data/species.generated.json` i `src/assets/peixos/`
  són al repositori. Només `pnpm species` truca a la Viquipèdia i a Commons.
- **Les xifres tenen font.** Tot el que és una dada dura viu a `src/lib/site.js` (`FACTS`,
  `CENTRE`, `SOURCES`), i les discrepàncies entre fonts es documenten a `/fonts` en comptes de
  triar-ne una en silenci.
- **El peu porta el crèdit d'autoria.** `.colophon__author`, amb la icona
  `public/pearpages-icon.png` i l'enllaç a `pearpages.com`, és el mateix crèdit que porten tots
  els llocs de pearpages. No s'ha de perdre en cap refactor del colofó.

## Estructura

```
data/species.js                 catàleg escrit a mà: FONT DE VERITAT del contingut
scripts/build-species.mjs       Viquipèdia + Commons → src/data/species.generated.json + imatges
scripts/build-og.mjs            targetes OG 1200×630 → public/og/
scripts/fetch-fonts.mjs         subconjunts woff2 → public/fonts/
scripts/check-build.mjs         comprovacions sobre dist/ (enllaços, SEO, alt, crèdits, sitemap)

src/lib/site.js                 dades de la reserva, hàbitats, bibliografia
src/lib/species.js              capa d'accés al catàleg generat
src/layouts/Base.astro          <head>, SEO, capçalera, peu, regle de fondària
src/components/                 un .astro + un .css per component
src/pages/                      /, /historia, /el-grapissar, /peixos, /peixos/[slug], /visitar,
                                /credits, /fonts, 404
```

## Disseny

La tesi és **la fondària**. La reserva es defineix per un eix vertical (superfície, barres a
4–11 m, límit a 25 m) i el lloc s'hi construeix a sobre:

- `DepthRuler.astro` — escala batimètrica fixa a l'esquerra; en desplaçar-se, la posició a la
  pàgina es llegeix com a fondària. Apareix només quan comences a baixar, per no competir amb
  l'escala del diagrama de l'inici.
- `ReefSection.astro` — secció del fons dibuixada a escala vertical real. `variant="perfil"`
  (de la platja al límit) i `variant="barres"` (secció a través de les crestes).
- `DepthBand.astro` — la mateixa escala, en línia, a cada fitxa i a cada targeta.

Paleta presa dels materials del lloc, no de blaus d'estoc: rosa malva de *Mesophyllum alternans*
(l'alga que construeix la roca), bronze de la posidònia, verd tèrbol d'aquesta aigua i sorra.
Dos registres: per defecte «terra ferma» clar, i `.submerged` per sota de la línia de flotació.

Tipografies autoallotjades: Bricolage Grotesque (display), Newsreader (text) i IBM Plex Mono
(mesures, coordenades, llicències). Subconjunts latin + latin-ext, per la ŀl geminada.

## Afegir o corregir una espècie

1. Edita l'entrada a `data/species.js` (o afegeix-n'hi una de nova).
2. `pnpm species -- --only=<slug>` — o amb `--force` per tornar a baixar les imatges.
3. Si la foto principal no és bona, fixa-la amb `imatge: 'File:…'` a l'entrada i repeteix amb
   `--force`. El guió descarta els mercats, el peix cuinat o en conserva, els aquaris, els
   museus, els vivers i laboratoris, el peix pescat o arponat, els gravats antics, les figures
   d'article científic i les fotos d'un congènere, però la darrera paraula és teva: el que cap
   filtre de text pot veure —un exemplar mort sobre fons negre, una càpsula ovígera buida amb
   un peu de foto que només diu el binomi— es veta a mà amb `excloure: ['File:…']`.
4. `pnpm og` per refer la targeta social, i `pnpm check`.

**Sempre cal mirar les imatges.** Els filtres treballen amb el títol i la descripció del fitxer
de Commons, i tots dos poden ser muts o mentir. Fins que no s'obren, «File:2006 sardines can
open.jpg» és una sardina com qualsevol altra.

Els patrons es comparen contra el text sense accents (`fold()`): «Oceanário», «marché» i
«gastronómica» no s'escapaven de cap altra manera, perquè `\b` no existeix darrere d'una vocal
accentuada en JavaScript.

## Desplegament

Push a `main` → `.github/workflows/deploy.yml` → GitHub Pages. El domini el fixa `public/CNAME`.

DNS necessari, a la zona **soms.cat**: un registre `CNAME` amb nom `masiablanca` que apunti a
`pearpages.github.io.` (amb el punt final si el proveïdor demana FQDN). Després, a
Settings → Pages, posar-hi `masiablanca.soms.cat` com a domini personalitzat i, quan la
verificació passi, activar *Enforce HTTPS*.

Si algun dia es canvia el domini, cal tocar-ho a `public/CNAME`, `astro.config.mjs`,
`src/lib/site.js`, `public/robots.txt` i `scripts/check-build.mjs` — hi ha una constant a cada
lloc i el comprovador falla si el canonical no hi coincideix.

## Estat

Fet: tot l'anterior. 77 pàgines, 69 espècies, 259 fotografies, `pnpm check` en verd.

Revisió d'imatges (6 d'agost de 2026): totes 69 fitxes obertes i mirades una per una. La
sardina s'il·lustrava amb una llauna oberta, la graellada i dos tancs d'incubació sense cap
peix; el llobarro, el reig, el moll de roca, el sonso, la lluerna, el sorell, l'agulla, el
seitó, la rata, la palomida, el gat de mar i la càntera, amb peix de peixateria, de plat o
acabat de pescar; l'espet duia dues fotos de *Sphyraena viridensis*; la rajada estrellada, una
bossa de sirena buida; la vaca tremolosa, l'estructura d'una proteïna. Arrel del problema: la
categoria de Commons arribava per ordre alfabètic i es tallava als 24 primers fitxers, de
manera que per a les espècies comestibles el peix viu no hi entrava mai. Ara els fitxers que
porten el binomi al títol passen al davant.

Pendent:
- Crear el remot de GitHub, configurar el DNS i fer el primer desplegament.
- Comprovar Lighthouse contra el domini real un cop publicat.
- La palomida i el milà es queden amb una sola imatge: a Commons no hi ha cap fotografia lliure
  d'aquestes dues espècies vives al seu medi (només aquaris, trofeus de pesca i làmines). Si
  n'apareix cap, són les dues fitxes a refer primer.
- Fotografies del grapissar mateix: totes les imatges actuals són de la mateixa espècie però
  fetes en altres indrets del Mediterrani i de l'Atlàntic. Si algun dia n'hi ha de fetes a
  Coma-ruga amb llicència lliure, són molt millors.
- No hi ha cap inventari científic públic de la ictiofauna d'aquesta reserva. Si se'n publica
  cap, el catàleg s'hauria de contrastar amb ell i marcar quines espècies hi són confirmades.
