'use server';

import {
  generatePersonalStatement,
  type GeneratePersonalStatementInput,
} from '@/ai/flows/generate-personal-statement';
import { z } from 'zod';

const formSchema = z.object({
  skills: z.string().min(10, 'Please describe your skills in more detail (at least 10 characters).'),
  experience: z.string().min(10, 'Please describe your experience in more detail (at least 10 characters).'),
  targetAudience: z.string().min(5, 'Please describe your target audience (at least 5 characters).'),
});

type FormState = {
  message: string | null;
  errors: {
    skills?: string[];
    experience?: string[];
    targetAudience?: string[];
  } | null;
  personalStatement: string | null;
};

export async function handleGenerateStatement(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    skills: formData.get('skills'),
    experience: formData.get('experience'),
    targetAudience: formData.get('targetAudience'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please fill out all fields correctly.',
      errors: validatedFields.error.flatten().fieldErrors,
      personalStatement: null,
    };
  }

  try {
    const result = await generatePersonalStatement(
      validatedFields.data as GeneratePersonalStatementInput
    );
    return {
      message: 'Success!',
      errors: null,
      personalStatement: result.personalStatement,
    };
  } catch (error) {
    console.error('AI Generation Error:', error);
    return {
      message: 'Failed to generate personal statement due to a server error. Please try again later.',
      errors: null,
      personalStatement: null,
    };
  }
}
