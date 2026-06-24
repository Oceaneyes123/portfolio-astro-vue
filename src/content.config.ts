import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['android', 'web', 'personal']),
    stack: z.array(z.string()),
    imageKey: z.string().optional(),
    imageKeys: z.array(z.string()).optional(),
    alt: z.string(),
    url: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
