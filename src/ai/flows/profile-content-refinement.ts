'use server';
/**
 * @fileOverview This file defines a Genkit flow for refining profile and project descriptions using AI.
 *
 * The flow takes user profile and project descriptions as input and suggests improvements to enhance clarity and engagement.
 * It exports:
 * - `refineContent`: The main function to trigger the content refinement flow.
 * - `RefineContentInput`: The input type for the `refineContent` function.
 * - `RefineContentOutput`: The output type for the `refineContent` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineContentInputSchema = z.object({
  profileDescription: z
    .string()
    .describe('The current profile description to be refined.'),
  projectDescriptions: z
    .array(z.string())
    .describe('An array of project descriptions to be refined.'),
});
export type RefineContentInput = z.infer<typeof RefineContentInputSchema>;

const RefineContentOutputSchema = z.object({
  refinedProfileDescription: z
    .string()
    .describe('The refined profile description.'),
  refinedProjectDescriptions: z
    .array(z.string())
    .describe('An array of refined project descriptions.'),
});
export type RefineContentOutput = z.infer<typeof RefineContentOutputSchema>;

export async function refineContent(
  input: RefineContentInput
): Promise<RefineContentOutput> {
  return refineContentFlow(input);
}

const refineContentPrompt = ai.definePrompt({
  name: 'refineContentPrompt',
  input: {schema: RefineContentInputSchema},
  output: {schema: RefineContentOutputSchema},
  prompt: `You are an AI assistant specializing in refining user profile and project descriptions to be more engaging and professional.

  Please refine the following profile description:
  {{{profileDescription}}}

  Please refine the following project descriptions:
  {{#each projectDescriptions}}{{{this}}}\n{{/each}}

  Return the refined profile and project descriptions in the specified JSON format.
  Remember to keep the tone professional and engaging.
  The refined content should be clear, concise, and appealing to potential employers or collaborators.
  Ensure the refinements highlight the user's skills and accomplishments effectively.
  Adhere to the provided output schema. Do not include any introductory or concluding remarks.`,
});

const refineContentFlow = ai.defineFlow(
  {
    name: 'refineContentFlow',
    inputSchema: RefineContentInputSchema,
    outputSchema: RefineContentOutputSchema,
  },
  async input => {
    const {output} = await refineContentPrompt(input);
    return output!;
  }
);
