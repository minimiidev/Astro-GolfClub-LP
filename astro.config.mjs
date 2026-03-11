// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  prefetch: false,


  output: 'static',
  adapter: cloudflare(
    // { imageService: { build: 'compile', runtime: 'cloudflare-binding' } }
  ),

  vite: {
    plugins: [tailwindcss(),

    sitemap({
      changefreq: 'weekly',
      priority: 1,
    }),]
  },


});