import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";
import addClasses from 'rehype-add-classes'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mywebsite-nutthaweed.vercel.app/',
  integrations: [sitemap(), react(), image({serviceEntryPoint
  : '@astrojs/image/sharp'}), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
      addClasses,
      {
        h1: 'text-4xl font-bold font-varela',
        h2: 'text-2xl font-bold font-varela',
        h3: 'text-xl font-bold font-varela',
        h4: 'text-lg font-bold font-varela',
        h5: 'font-bold font-varela',
        h6: 'font-bold font-varela',
        img: 'border border-slate-300 dark:border-zinc-900 rounded-xl mb-6',
        p: 'mb-6',
        a: 'underline underline-offset-2 hover:text-red-300 decoration-red-300'
      }
    ]
    ]
  }
});