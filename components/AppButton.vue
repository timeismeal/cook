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
	input(
		type="submit"
		class="rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
		:value="props.value || 'Submit'"
		xdisabled="loading"
		)
</template>
