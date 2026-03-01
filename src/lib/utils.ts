import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { visit } from "unist-util-visit";

import { SITE_URL } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const siteOrigin = new URL(SITE_URL).origin;

export function externalAnchorPlugin() {
  // biome-ignore lint/suspicious/noExplicitAny: missing types
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "a") return;
      const href = node.properties?.href;
      if (typeof href !== "string") return;
      try {
        const url = new URL(href, SITE_URL);
        if (url.origin !== siteOrigin) {
          node.properties.target = "_blank";
          node.properties.rel = "noopener";
        }
      } catch {
        // ignore malformed URLs
      }
    });
  };
}
