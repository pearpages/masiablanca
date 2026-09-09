// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export const SITE = 'https://masiablanca.soms.cat';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    // Wikimedia originals are large; every rendition is generated at build time.
    responsiveStyles: true,
  },
  integrations: [sitemap()],
});
