import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
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
