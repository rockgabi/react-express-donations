'use client';

import * as z from 'zod';

const modelFormSchema = z.object({
  organizationId: z.number({
    required_error: 'Please select an organization',
  }),
  name: z.string().min(1, { message: 'A name is required for the Organization' }).max(125),
  description: z.string().min(1, { message: 'A description is required for the Organization' }).max(500),
  goal: z.number().gt(0, { message: 'A positive value for goal is required' }),
});

export default modelFormSchema;
