import { appIdeaResultSchema } from '@/components/app-idea-explorer/schema'
import { openai } from '@ai-sdk/openai'
import { streamObject } from 'ai'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const context = await req.json()

  const result = streamObject({
    model: openai('gpt-4-turbo'),
    schema: appIdeaResultSchema,
    prompt: `
    You are an expert digital specialist consultant specialized in app idea feasibility analysis.
    
    Your task is to generate a comprehensive "appIdeaResultSchema" for an App Idea Explorer that helps business owners evaluate the feasibility of their app ideas.
    
    The app idea provided is ${
      context.appIdea
    } and the context of the app idea are ${JSON.stringify(
      context.appSettings
    )}.
    
    The result should follow the schema and include keys for:
    - Name (The app name for the app idea)
    - Feasibility Factors
    - Cost Estimates
    - Core Features
    - Development Phases and Timeline Steps
    - Ongoing Expenses
    - Efficiency & Automation Benefits
    - Project Kickoff Steps
    - Feasibility Factors (which assess compliance, custom frameworks, development time, expertise, scalability, and tech complexity on a scale of 1-5)
    `,
  })

  return result.toTextStreamResponse()
}
