<script setup>
useHead({
  bodyAttrs: {
    class: "xh-screen xoverflow-hidden",
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

<template>
  <div
    class="flex justify-center items-center min-h-screen w-screen overflow-y-scroll"
  >
    <div class="m-8">
      <slot></slot>
    </div>
  </div>
</template>
