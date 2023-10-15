<script setup>
// -- data --
// const messages = ref([])

// -- props --
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: "Sucker",
  },
});

// -- computed --
// const calculatedHeight = computed(() => { return ... })

// -- methods --
// const askQuestion = async () => { await ... }
</script>

<template lang="pug">
div
	input.button(
		type="submit"
		:value="props.value || 'Submit'"
		xdisabled="loading"
		)
</template>
