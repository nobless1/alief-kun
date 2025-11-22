'use server';

import {
  generatePersonalStatement,
  type GeneratePersonalStatementInput,
} from '@/ai/flows/generate-personal-statement';
import { z } from 'zod';

const formSchema = z.object({
  skills: z.string().min(10, 'Jelaskan keahlian Anda lebih detail (minimal 10 karakter).'),
  experience: z.string().min(10, 'Jelaskan pengalaman Anda lebih detail (minimal 10 karakter).'),
  targetAudience: z.string().min(5, 'Jelaskan target audiens Anda (minimal 5 karakter).'),
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
      message: 'Harap isi semua kolom dengan benar.',
      errors: validatedFields.error.flatten().fieldErrors,
      personalStatement: null,
    };
  }

  try {
    const result = await generatePersonalStatement(
      validatedFields.data as GeneratePersonalStatementInput
    );
    return {
      message: 'Sukses!',
      errors: null,
      personalStatement: result.personalStatement,
    };
  } catch (error) {
    console.error('Kesalahan Generasi AI:', error);
    return {
      message: 'Gagal membuat pernyataan pribadi karena kesalahan server. Silakan coba lagi nanti.',
      errors: null,
      personalStatement: null,
    };
  }
}
