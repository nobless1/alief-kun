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
    .describe('A comma-separated list of skills.'),
  experience: z
    .string()
    .describe('A summary of relevant experience.'),
  targetAudience: z
    .string()
    .describe('The intended audience for the personal statement.'),
});
export type GeneratePersonalStatementInput = z.infer<
  typeof GeneratePersonalStatementInputSchema
>;

const GeneratePersonalStatementOutputSchema = z.object({
  personalStatement: z
    .string()
    .describe('The generated personalized personal statement.'),
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
  prompt: `You are an expert personal statement writer. Generate a compelling personal statement based on the following information:

Skills: {{{skills}}}
Experience: {{{experience}}}
Target Audience: {{{targetAudience}}}

Write a personal statement that is tailored to the target audience and highlights the relevant skills and experience.`,
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
