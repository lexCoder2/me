// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://iarodriguez.com',
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-MX', de: 'de-DE' } } })],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
