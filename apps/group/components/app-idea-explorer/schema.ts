import { z } from 'zod'

export const feasibilityFactorsSchema = z
  .object({
    complianceRequirements: z
      .number()
      .describe(
        'Compliance requirements on a scale from 1 (none) to 5 (strict regulations).'
      ),
    customFrameworksRequired: z
      .number()
      .describe(
        'Custom frameworks required on a scale from 1 (many pre-built) to 5 (fully custom).'
      ),
    developmentTime: z
      .number()
      .describe(
        'Development time on a scale from 1 (<1 month) to 5 (>12 months).'
      ),
    expertiseRequired: z
      .number()
      .describe(
        'Expertise required on a scale from 1 (general developer) to 5 (specialized AI/Blockchain teams).'
      ),
    scalabilityNeeds: z
      .number()
      .describe(
        'Scalability needs on a scale from 1 (small/local) to 5 (global, millions of users).'
      ),
    techComplexity: z
      .number()
      .describe(
        'Technology complexity on a scale from 1 (simple) to 5 (highly advanced).'
      ),
  })
  .describe(
    'Feasibility factors assessing project constraints and requirements. In general, lower scores indicate easier development. SaaS apps may score lower (2 on average), while complex AI/Blockchain apps may score higher (4 on average).'
  )

export const appIdeaResultSchema = z.object({
  name: z
    .string()
    .describe('Provide a concise name summarizing the app idea in 2-5 words.'),

  feasibilityFactors: feasibilityFactorsSchema,

  costEstimates: z.object({
    description: z
      .string()
      .describe(
        'Describe how much it will cost to develop this app in 1-3 paragraphs with 1-3 sentences in each paragraph.'
      ),
    items: z
      .array(
        z.object({
          stage: z
            .string()
            .describe(
              'Identify the 3 levels of costs (e.g., "Prototype", "MVP", "Full-scale Development").'
            ),
          fromCost: z
            .string()
            .describe(
              'Provide a clear estimate of the starting cost for this level, keeping costs low. Prototype cost should always be around 5,000. Cost for any stage should never exceed 50,000'
            ),
        })
      )
      .describe(
        'A list of cost estimate items for different development stages.'
      ),
  }),

  coreFeatures: z.object({
    description: z
      .string()
      .describe(
        'List the core features that the app should have in 1-3 paragraphs with 1-3 sentences each paraagraph, emphasizing functionalities that deliver in user value.'
      ),
    items: z
      .array(
        z.object({
          icon: z
            .string()
            .describe('Represent the feature visually (e.g., using an emoji).'),
          title: z.string().describe('Provide the title of the feature.'),
          description: z
            .string()
            .describe(
              'Explain the functionality and benefits of this feature in detail.'
            ),
        })
      )
      .describe(
        'A list of 5 core feature items that highlight key functionalities.'
      ),
  }),

  developmentPhases: z.object({
    description: z
      .string()
      .describe(
        'Explain the key phases of development and approximate timelines for each phase in 1-3 paragraphs with 1-3 sentences in each paragraph.'
      ),
    items: z
      .array(
        z.object({
          label: z.string().describe('Name the development phase.'),
          duration: z
            .string()
            .describe(
              'Estimate the duration for this phase (e.g., "4-6 months").'
            ),
          width: z
            .string()
            .describe(
              'Provide a visual indicator (percentage) representing the phase duration.'
            ),
        })
      )
      .describe(
        'A list of development phase items for timeline visualization.'
      ),
  }),

  developmentTimelineSteps: z.object({
    description: z
      .string()
      .describe(
        'Provide step-by-step details of the development timeline, with each step described in 1-3 paragraphs with 1-3 sentences in each paragraph.'
      ),
    items: z
      .array(
        z.object({
          title: z.string().describe('Name the timeline step.'),
          duration: z
            .string()
            .describe('Detail the duration or timing for this step.'),
        })
      )
      .describe(
        'A list of timeline step items offering additional details for development.'
      ),
  }),

  projectTimelinePhases: z.object({
    description: z
      .string()
      .describe(
        'Outline the major phases of the project timeline and explain how they sequentially lead to the final launch in 1-3 paragraphs with 1-3 sentences in each paragraph.'
      ),
    items: z
      .array(
        z.object({
          label: z.string().describe('Name the phase of the project timeline.'),
          start: z
            .string()
            .describe(
              'Indicate the starting position of the phase (e.g., "0%").'
            ),
          width: z
            .string()
            .describe(
              'Provide the width as a percentage to visually represent the phase.'
            ),
        })
      )
      .describe('A list of project timeline phase items for visual display.'),
  }),

  projectTimelineSteps: z.object({
    description: z
      .string()
      .describe(
        'Detail the steps in the project timeline with specific actions or milestones, each described in 1-3 paragraphs with 1-3 sentences in each paragraph.'
      ),
    items: z
      .array(
        z.object({
          title: z.string().describe('Name the timeline step.'),
          description: z
            .string()
            .describe('Provide a detailed explanation for this step.'),
        })
      )
      .describe(
        'A list of project timeline step items with detailed descriptions.'
      ),
  }),

  ongoingExpenses: z.object({
    description: z
      .string()
      .describe(
        'Describe the ongoing expenses for maintaining and scaling the app in 1-3 paragraphs with 1-3 sentences in each paragraph.'
      ),
    items: z
      .array(
        z.object({
          title: z.string().describe('Name the expense item.'),
          description: z
            .string()
            .describe('Explain the expense details and their implications.'),
        })
      )
      .describe(
        'A list of ongoing expense items related to app maintenance and scaling.'
      ),
  }),

  efficiencyAutomation: z.object({
    description: z
      .string()
      .describe(
        'Explain how the app can improve operational efficiency and automate tasks in 1-3 paragraphs with 1-3 sentences in each paragraph.'
      ),
    items: z
      .array(
        z.object({
          title: z.string().describe('Name the efficiency improvement.'),
          description: z
            .string()
            .describe(
              'Describe how this improvement benefits the app’s operations.'
            ),
        })
      )
      .describe('A list of 5 - 7 efficiency and automation improvement items.'),
  }),

  projectKickoffSteps: z.object({
    description: z
      .string()
      .describe(
        'Outline the key steps to kick off the project, with each step described in 1-3 paragraphs with 1-3 sentences in each paragraph.'
      ),
    items: z
      .array(
        z.object({
          title: z.string().describe('Provide the title of the kickoff step.'),
          description: z
            .string()
            .describe(
              'Offer an HTML description outlining the requirements and instructions for this step.'
            ),
        })
      )
      .describe(
        'A list of up to 3-5 project kickoff step items outlining the initiation process. Do not exceed more than 5 steps.'
      ),
  }),
})
