'use client';

import * as z from 'zod';

const modelFormSchema = z.object({
  name: z.string().min(1).max(125),
  label: z.string().min(1).max(125),
});

export default modelFormSchema;
