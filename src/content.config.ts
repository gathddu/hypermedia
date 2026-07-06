import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { join } from 'path';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: join(process.cwd(), 'src/content/blog') }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
