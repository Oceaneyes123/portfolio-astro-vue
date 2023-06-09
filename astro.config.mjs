import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://jezreldave.com',
  integrations: [vue(), tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap(), mdx()],
  experimental: {
    assets: true
  }
});