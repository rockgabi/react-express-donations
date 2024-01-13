'use client';

import * as z from 'zod';

const modelFormSchema = z.object({
  organization: z.number(),
  name: z.string().min(1).max(125),
  description: z.string().min(1).max(500),
  goal: z.number().multipleOf(0.01),
});

export default modelFormSchema;
