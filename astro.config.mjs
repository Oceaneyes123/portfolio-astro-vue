import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jezreldave.com',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sitemap(),
    mdx(),
  ],
});
