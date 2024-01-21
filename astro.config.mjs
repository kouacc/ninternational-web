import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(), 
    astroI18next()],
    output: "hybrid",
    adapter: netlify()
});