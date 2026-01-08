import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    aliases: z.array(z.string()).default([]),
    slug: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    modified: z.coerce.date().optional(),
  }),
});

export const collections = {
  posts,
};
