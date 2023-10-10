// server/utils/ai.js

// import OpenAI from "openai"
import { Configuration, OpenAIApi } from 'openai'

const apiKey = useRuntimeConfig().openai.key
const config = new Configuration({ apiKey })
const openai = new OpenAIApi(config)

export const getChatStream = async ({ messages }) => {
	console.log('/server/utils/ai/getChatStream messages: ', messages)
  const response = await openai.createChatCompletion(
    {
      max_tokens: 2048,
      model: "gpt-3.5-turbo", // gpt-3.5-turbo or gpt-4
      temperature: 0.5,
      messages,
      stream: true,
    },
    { responseType: "stream" }
  )

  // for await (const part of stream) {
  //   process.stdout.write(part.choices[0]?.delta?.content || '')
  // }

  console.log('/server/utils/ai/getChatStream returning stream: ', response)
  return response.data
}
