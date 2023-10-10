// repo/chat.js

export const getAnswer = async ({ messages }) => {
  console.log('repo/getAnswer json msg: ', JSON.stringify({messages}))
  const { body } = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({
      messages,
    }),
  });
  if (!body) throw new Error("Unknown error")
  console.log('repo/getAnswer body: ', body)
  return body;
};
