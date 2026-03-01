import fs from "node:fs";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

import { SITE_URL } from "./src/lib/constants";
import { externalAnchorPlugin } from "./src/lib/utils";

function posthogProxy() {
  return {
    name: "posthog-proxy",
    hooks: {
      "astro:build:done": () => {
        const configPath = ".vercel/output/config.json";
        if (!fs.existsSync(configPath)) return;
        const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
        const posthogRoutes = [
          {
            src: "/ph/static/(.*)",
            dest: "https://eu-assets.i.posthog.com/static/$1",
          },
          {
            src: "/ph/(.*)",
            dest: "https://eu.i.posthog.com/$1",
          },
        ];
        config.routes = [...posthogRoutes, ...config.routes];
        fs.writeFileSync(configPath, JSON.stringify(config, null, "\t"));
      },
    },
  };
}

export default defineConfig({
  site: SITE_URL,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), mdx(), sitemap(), icon(), posthogProxy()],
  markdown: {
    rehypePlugins: [externalAnchorPlugin],
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
  },

  adapter: vercel(),
});
