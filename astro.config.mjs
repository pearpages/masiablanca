// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export const SITE = 'https://masiablanca.pages.ninja';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    // Wikimedia originals are large; every rendition is generated at build time.
    responsiveStyles: true,
  },
  integrations: [
    sitemap({
      i18n: undefined,
      changefreq: 'yearly',
      lastmod: new Date('2026-08-06'),
      serialize(item) {
        if (item.url === `${SITE}/`) item.priority = 1.0;
        else if (item.url.includes('/peixos/')) item.priority = 0.7;
        else item.priority = 0.8;
        return item;
      },
    }),
  ],
});
