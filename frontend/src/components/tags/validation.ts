'use client';

import * as z from 'zod';

const modelFormSchema = z.object({
  name: z.string().min(1).max(125),
  description: z.string().min(1).max(500),
  website: z.string().url().max(255),
  tags: z.array(z.number()),
});

export default modelFormSchema;
