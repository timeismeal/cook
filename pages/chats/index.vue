<script setup>
import { getAnswer } from "@/repo/chat.js";

const messages = ref([]);
const answer = ref(null);
const question = ref("say it aint so");
const user = useSupabaseUser();

const askQuestion = async () => {
  console.log("askQuestion called");
  messages.value.push({
    role: "user",
    content: question.value,
  });
  question.value = "";
  const stream = await getAnswer({ messages: messages.value });
  answer.value = {
    role: "assistant",
    content: "",
  };
  useChatStream({
    stream,
    onChunk: ({ data }) => {
      console.log("onChunk called", data);
      answer.value.content += data;
    },
    onReady: () => {
      console.log("onReady called");
      messages.value.push(answer.value);
      answer.value = null;
    },
  });
};
</script>

<template lang="pug">
.chat-index
  pre user: {{ user }}
  pre messages: {{ messages }}
  form(@submit.prevent="askQuestion")
    ul
      li(v-for="message in messages")
        | {{ message.role }}: {{ message.content }}
      li(v-if="answer")
        | {{ answer.role }}: {{ answer.content }}
    div
      label Question:
        input(v-model="question" type="text")
      button.bg-primary-500.py-1.px-3.rounded.font-bold.text-white(type="submit") Ask


  prompter(
    label="Design a meal plan for diabetics"
    desc="to manage blood sugar through balanced eating"
    )

  prompter.mt-3(
    label="Get high-protein breakfast ideas"
    desc="to start your day with energy and nutrition"
    )
</template>
