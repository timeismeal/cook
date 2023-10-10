// composables/chat-stream.js

const resolveStream = async ({
  data,
  onChunk = () => {},
  onReady = () => {},
  stream,
}) => {
  console.log('/composables/chat-stream/resolveStream stream: ', stream)
  const reader = stream.pipeThrough(new TextDecoderStream()).getReader();
  while (true) {
    const stream = await reader.read();
    if (stream.done) break;

    console.log('/composables/chat-stream/resolveStream while...: ', stream?.value)

    const chunks = stream?.value
      .replaceAll(/^data: /gm, "")
      .split("\n")
      .filter((c) => Boolean(c.length) && c !== "[DONE]")
      .map((c) => JSON.parse(c));

    for (let chunk of chunks) {
      const content = chunk.choices[0].delta.content;
      if (!content) continue;
      data.value += chunk.choices[0].delta.content;
      onChunk({ data: content });
    }
  }

  onReady({ data: data.value });
};

export const useChatStream = ({
  onChunk = () => {},
  onReady = () => {},
  stream,
}) => {
  console.log('/composables/chat-stream/useChatStream stream: ', stream)
  const data = ref("");

  resolveStream({
    data,
    onChunk,
    onReady,
    stream,
  });

  return {
    data: readonly(data),
  };
};
