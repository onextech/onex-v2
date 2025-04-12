import { z } from 'zod'

import { appIdeaResultSchema, feasibilityFactorsSchema } from './schema'

export interface AppIdeaSettings {
  appCategory: string
  appType: string
  industry: string
  platform: string
  targetAudience: string
}

export type FeasibilityFactors = z.infer<typeof feasibilityFactorsSchema>

export type AppIdeaResult = z.infer<typeof appIdeaResultSchema>
