# La Masia Blanca

Lloc estàtic sobre la **reserva marina de la Masia Blanca** — el grapissar del Vendrell, davant
de les platges de Coma-ruga i el Francàs (Baix Penedès). Història, context i un catàleg
il·lustrat de 69 espècies de peixos, cadascuna enllaçada a la Viquipèdia i il·lustrada amb
fotografies de Wikimedia Commons publicades amb la seva autoria i llicència.

→ **[masiablanca.soms.cat](https://masiablanca.soms.cat)**

## Posar-hi mà

Cal [mise](https://mise.jdx.dev/). No fa falta cap instal·lació global de node.

```bash
mise install
pnpm install
pnpm dev
```

| Ordre | Què fa |
|---|---|
| `pnpm dev` | Servidor de desenvolupament |
| `pnpm build` | Compila a `dist/` |
| `pnpm check` | Compila i verifica enllaços, SEO, textos alternatius, crèdits i sitemap |
| `pnpm species` | Refà el catàleg des de la Viquipèdia i Commons (manual) |
| `pnpm og` | Refà les targetes Open Graph (manual) |

Les instruccions de treball detallades són a [`CLAUDE.md`](CLAUDE.md).

## Continguts i llicències

Els textos són originals. Les fotografies provenen de Wikimedia Commons i es reprodueixen amb
l'autoria i la llicència de cada autor, detallades a
[/credits](https://masiablanca.soms.cat/credits). Els noms populars catalans procedeixen de la
Viquipèdia (CC BY-SA 4.0). Totes les fonts són a
[/fonts](https://masiablanca.soms.cat/fonts).

És un lloc divulgatiu independent, sense cap vinculació oficial amb el Ministeri d'Agricultura,
Pesca i Alimentació ni amb l'Ajuntament del Vendrell.
