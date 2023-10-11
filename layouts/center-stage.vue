<script setup>
useHead({
  bodyAttrs: {
    class: "h-screen xoverflow-hidden",
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});

// -- props --
// const props = defineProps({
//   leftBackgroundImage: {
//     type: String,
//     default: null,
//   },
// });

// -- data --
// const messages = ref([])

// -- computed --
// const calculatedHeight = computed(() => { return ... })

// -- methods --
// const askQuestion = async () => { await ... }
</script>

<template lang="pug">
.flex.justify-center.items-center.h-screen.w-screen
  .debug-danger
    slot
</template>
