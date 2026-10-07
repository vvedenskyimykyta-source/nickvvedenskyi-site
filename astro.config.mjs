// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nickvvedenskyi.com',
  trailingSlash: 'ignore',

  // Astro emits sitemap-index.xml, but /sitemap.xml is where people and tools
  // look first. Declared here so the adapter routes it; a vercel.json rewrite
  // is overridden by the adapter's own routing.
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // Pages are static, only /api/* routes run on demand (prerender = false)
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  integrations: [
    sitemap({
      // The privacy pages render noindex, so listing them would only earn
      // "Submitted URL marked noindex" warnings in Search Console.
      filter: (page) => !/\/privacy\/?$/.test(page),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', uk: 'uk' },
      },
    }),
  ],
});
