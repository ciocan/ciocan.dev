import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    url: z.string().optional(),
    year: z.string(),
    type: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects };
