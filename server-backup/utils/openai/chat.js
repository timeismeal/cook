import OpenAI from 'openai'

const apiKey = useRuntimeConfig().openai.key
const openai = new OpenAI({ apiKey })

export const getResponse = async (prompt) => {
	const response = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		max_tokens: 2048,
		temperature: 0.5,
		messages: [ { role: 'user', content: prompt } ],
	})
	return response.choices
}

export const getResponseStream = async (prompt) => {
	console.log('getReponseStream prompt: ', prompt)
	const response = await openai.chat.completions.create(
		{
			model: 'gpt-3.5-turbo',
			max_tokens: 2048,
			temperature: 0.5,
			stream: true,
			messages: [ { role: 'user', content: prompt } ],
		},
		{ responseType: 'stream' },
	)
	console.log('getReponseStream response: ', response)
	return response.choices
}