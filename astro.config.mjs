// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nickvvedenskyi.com',
  trailingSlash: 'ignore',

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
