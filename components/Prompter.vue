import { mergeProps } from 'vue';
<script setup>
// -- data --
// const messages = ref([]);

// -- props --
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
});

// -- computed --
// const calculatedHeight = computed(() => { return ... })

// -- methods --
// const askQuestion = async () => { await ... }
</script>

<template lang="pug">
.prompter
	.border.border-primary-200.rounded-lg.text-sm.px-3.py-2
		.font-semibold.text-primary-700 {{ props.label }}
		.description.text-gray-500.text-xs {{ props.desc }}
</template>
