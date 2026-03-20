import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pierre.demessence.fr',
  output: 'static',
  integrations: [sitemap()],
});