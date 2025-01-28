import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { visit } from "unist-util-visit";

import { SITE_URL } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function externalAnchorPlugin() {
  // biome-ignore lint/suspicious/noExplicitAny: missing types
  return (tree: any) => {
    visit(tree, "link", (node) => {
      if (/^(https?):\/\/[^\s/$.?#].[^\s]*$/i.test(node.url) && !node.url.includes(SITE_URL)) {
        node.data ??= {};
        node.data.hProperties ??= {};
        node.data.hProperties.target = "_blank";
      }
    });
  };
}
