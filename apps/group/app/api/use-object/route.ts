import { openai } from '@ai-sdk/openai'
import { appIdeaResultSchema } from '@onex/components/app-idea-explorer/schema'
import { streamObject } from 'ai'

// Allow streaming responses up to 60 seconds
export const maxDuration = 60

export async function POST(req: Request) {
  const context = await req.json()

  const result = streamObject({
    // @ts-ignore
    model: openai('gpt-4-turbo'),
    prompt: `
      The app idea provided is ${
        context.appIdea
      } and the context of the app idea are ${JSON.stringify(
      context.appSettings
    )}.
    `,
    schema: appIdeaResultSchema,
    system: `
    You are an expert digital specialist consultant specialized in app idea feasibility analysis.
    Your task is to generate a comprehensive results page for an App Idea Explorer based on the schema to help business owners evaluate the feasibility of their app idea.
    `,
  })

  return result.toTextStreamResponse()
}
