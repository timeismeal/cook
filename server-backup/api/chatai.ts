import { getResponse, getResponseStream } from "../utils/openai/chat";

export default defineEventHandler(async (event) => {
  const { prompt } = await readBody(event);
	// const response = await getResponse(prompt);
	// return response

  const stream = await getResponseStream(prompt);
  return sendStream(event, stream);
});