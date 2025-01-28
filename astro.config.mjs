import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

import { SITE_URL } from "./src/lib/constants";
import { externalAnchorPlugin } from "./src/lib/utils";

export default defineConfig({
  site: SITE_URL,

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@/": "./src/*",
      },
    },
  },

  integrations: [react(), mdx(), sitemap(), icon()],
  markdown: {
    remarkPlugins: [externalAnchorPlugin],
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
