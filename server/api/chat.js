// server/api/chat.js

import { getChatStream } from "../utils/ai"

export default defineEventHandler(async (event) => {
  const { messages } = JSON.parse(await readBody(event))
	console.log('defineEventHandler messages: ', messages)
  const stream = await getChatStream({ messages })
	console.log('defineEventHandler stream: ', stream)
  return sendStream(event, stream);
})