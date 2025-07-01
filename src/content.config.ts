import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            date: z.coerce.date(),
        }),
});

export const collections = { posts };
