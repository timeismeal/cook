import { getResponse } from "../utils/openai/chat";

export default defineEventHandler(async (event) => {
  const { prompt } = await readBody(event);
	const response = await getResponse(prompt);
	return response

  // const stream = await getChatStream({ messages });
  // return sendStream(event, stream);
});