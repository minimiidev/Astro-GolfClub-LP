// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  prefetch: false,

  site: `https://test.vercel.app/`,

  output: 'static',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss(),

    sitemap({
      changefreq: 'weekly',
      priority: 1,
    }),]
  },


});