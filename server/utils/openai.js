import { Configuration, OpenAIApi } from 'openai'

const config = useRuntimeConfig()

const configuration = new Configuration({
	apiKey: config.openAi.key,
})

const openai = new OpenAIApi(configuration)

export const getChatStream = async ({ messages }) => {
	const response = await openai.createChatCompletion(
		{
			model: 'gpt-3.5-turbo',
			max_tokens: 2048,
			temperature: 0.5,
			stream: true,
			messages,
		},
		{ responseType: 'stream' },
	)
	return response.data
}