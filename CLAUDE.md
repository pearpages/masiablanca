# masiablanca.pages.ninja

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
   `--force`. El guió descarta sols els mercats, aquaris, museus, gravats antics i les fotos
   d'una altra espècie, però la darrera paraula és teva.
4. `pnpm og` per refer la targeta social, i `pnpm check`.

## Desplegament

Push a `main` → `.github/workflows/deploy.yml` → GitHub Pages. El domini el fixa `public/CNAME`.

DNS necessari: un registre **CNAME** `masiablanca` → `pearpages.github.io`. Després, a
Settings → Pages, posar-hi el domini i activar *Enforce HTTPS*.

## Estat

Fet: tot l'anterior. 77 pàgines, 69 espècies, 265 fotografies, `pnpm check` en verd.

Pendent:
- Crear el remot de GitHub, configurar el DNS i fer el primer desplegament.
- Comprovar Lighthouse contra el domini real un cop publicat.
- Fotografies del grapissar mateix: totes les imatges actuals són de la mateixa espècie però
  fetes en altres indrets del Mediterrani i de l'Atlàntic. Si algun dia n'hi ha de fetes a
  Coma-ruga amb llicència lliure, són molt millors.
- No hi ha cap inventari científic públic de la ictiofauna d'aquesta reserva. Si se'n publica
  cap, el catàleg s'hauria de contrastar amb ell i marcar quines espècies hi són confirmades.
