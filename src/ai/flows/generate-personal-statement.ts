'use server';

/**
 * @fileOverview AI flow for generating personalized personal statements.
 *
 * - generatePersonalStatement - A function that generates a personalized personal statement.
 * - GeneratePersonalStatementInput - The input type for the generatePersonalStatement function.
 * - GeneratePersonalStatementOutput - The return type for the generatePersonalStatement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalStatementInputSchema = z.object({
  skills: z
    .string()
    .describe('Daftar keahlian yang dipisahkan koma.'),
  experience: z
    .string()
    .describe('Ringkasan pengalaman yang relevan.'),
  targetAudience: z
    .string()
    .describe('Audiens yang dituju untuk pernyataan pribadi.'),
});
export type GeneratePersonalStatementInput = z.infer<
  typeof GeneratePersonalStatementInputSchema
>;

const GeneratePersonalStatementOutputSchema = z.object({
  personalStatement: z
    .string()
    .describe('Pernyataan pribadi yang dipersonalisasi yang dihasilkan.'),
});
export type GeneratePersonalStatementOutput = z.infer<
  typeof GeneratePersonalStatementOutputSchema
>;

export async function generatePersonalStatement(
  input: GeneratePersonalStatementInput
): Promise<GeneratePersonalStatementOutput> {
  return generatePersonalStatementFlow(input);
}

const generatePersonalStatementPrompt = ai.definePrompt({
  name: 'generatePersonalStatementPrompt',
  input: {schema: GeneratePersonalStatementInputSchema},
  output: {schema: GeneratePersonalStatementOutputSchema},
  prompt: `Anda adalah seorang penulis pernyataan pribadi ahli. Buat pernyataan pribadi yang menarik berdasarkan informasi berikut:

Keahlian: {{{skills}}}
Pengalaman: {{{experience}}}
Target Audiens: {{{targetAudience}}}

Tulis pernyataan pribadi yang disesuaikan dengan target audiens dan menonjolkan keahlian dan pengalaman yang relevan.`,
});

const generatePersonalStatementFlow = ai.defineFlow(
  {
    name: 'generatePersonalStatementFlow',
    inputSchema: GeneratePersonalStatementInputSchema,
    outputSchema: GeneratePersonalStatementOutputSchema,
  },
  async input => {
    const {output} = await generatePersonalStatementPrompt(input);
    return output!;
  }
);
