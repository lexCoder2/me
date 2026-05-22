import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Single collection — posts live in en/, es/, de/ subfolders.
// Post IDs will be e.g. "en/apache-beam-pipelines", "es/secure-llm-workflows".
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string().optional(),
    date:        z.coerce.date(),
    tags:        z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { blog };
