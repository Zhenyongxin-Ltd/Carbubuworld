// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import playformInline from "@playform/inline";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://carbubu.netlify.app",
    base: "/",
    integrations: [mdx(), playformInline({ Critters: true })],
    output: "static",
    devToolbar: {
        enabled: false,
    },
    adapter: cloudflare({
     imageService: 'cloudflare'
    }),
    vite: {
        ssr: {
              external: ['node:buffer'],
         },
    },
});