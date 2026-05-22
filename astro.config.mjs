// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lexCoder2.github.io',
  base: '/me',
  integrations: [sitemap()],
  output: 'static',
});
