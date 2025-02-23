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
    'Feasibility factors assessing project constraints and requirements.'
  )

export const appIdeaResultSchema = z.object({
  name: z.string().describe('The app name that summarizes the app idea in 2 - 5 words.'),

  // ==============================
  // Score
  // ==============================
  feasibilityFactors: feasibilityFactorsSchema,

  // ==============================
  // Main Sections
  // ==============================
  costEstimates: z
    .array(
      z
        .object({
          stage: z
            .string()
            .describe(
              "Stage of the development process (e.g., 'MVP Development')."
            ),
          cost: z
            .string()
            .describe("Estimated cost for the stage (e.g., 'From $5,000')."),
        })
        .describe('Cost estimate item with stage and cost.')
    )
    .describe('Array of cost estimates for different development stages.'),

  coreFeatures: z
    .array(
      z
        .object({
          icon: z.string().describe('Icon representation (e.g., emoji).'),
          title: z.string().describe('Title of the core feature.'),
          description: z
            .string()
            .describe("Description of the feature's functionality."),
        })
        .describe('Core feature item with icon, title, and description.')
    )
    .describe('Array of core features highlighting key functionalities.'),

  developmentPhases: z
    .array(
      z
        .object({
          label: z.string().describe('Label for the development phase.'),
          duration: z
            .string()
            .describe("Duration of the phase (e.g., '4-6 MONTHS')."),
          width: z
            .string()
            .describe("Visual width indicator for the phase (e.g., '70%')."),
        })
        .describe('Development phase item with label, duration, and width.')
    )
    .describe('Array of development phases for timeline visualization.'),

  developmentTimelineSteps: z
    .array(
      z
        .object({
          title: z.string().describe('Title for the timeline step.'),
          duration: z
            .string()
            .describe('Duration detail for the timeline step.'),
        })
        .describe('Timeline step item with title and duration.')
    )
    .describe('Array of timeline steps providing additional phase details.'),

  projectTimelinePhases: z
    .array(
      z
        .object({
          label: z.string().describe('Label for the project timeline phase.'),
          start: z
            .string()
            .describe("Start position for the phase indicator (e.g., '0%')."),
          width: z
            .string()
            .describe("Width of the phase indicator (e.g., '11.11%')."),
        })
        .describe('Project timeline phase item with label, start, and width.')
    )
    .describe('Array of project timeline phases for displaying the process.'),

  projectTimelineSteps: z
    .array(
      z
        .object({
          title: z.string().describe('Title of the timeline step.'),
          description: z
            .string()
            .describe("Description detailing the step's specifics."),
        })
        .describe('Project timeline step item with title and description.')
    )
    .describe('Array of project timeline steps with detailed descriptions.'),

  ongoingExpenses: z
    .array(
      z
        .object({
          title: z.string().describe('Title for the expense item.'),
          description: z
            .string()
            .describe('Description of the expense details.'),
        })
        .describe('Ongoing expense item with title and description.')
    )
    .describe(
      'Array of ongoing expenses related to project maintenance and costs.'
    ),

  efficiencyAutomation: z
    .array(
      z
        .object({
          title: z
            .string()
            .describe('Title for the efficiency improvement area.'),
          description: z
            .string()
            .describe('Description of the automation benefit.'),
        })
        .describe('Efficiency and automation item with title and description.')
    )
    .describe(
      'Array of items detailing efficiency and automation improvements.'
    ),

  projectKickoffSteps: z
    .array(
      z
        .object({
          number: z
            .number()
            .describe('Step number in the project kickoff sequence.'),
          title: z.string().describe('Title of the kickoff step.'),
          description: z
            .string()
            .describe('HTML description outlining the step details.'),
        })
        .describe(
          'Project kickoff step item with number, title, and description.'
        )
    )
    .describe(
      'Array of project kickoff steps outlining the initiation process.'
    ),
})
