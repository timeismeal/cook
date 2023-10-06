<script setup>
const props = defineProps({
  joke: {
    type: String,
    default: "no joke, sir",
  },
});

const data = ref({
  lovely: "dovey",
  foobar: useAttrs().foobar,
});
</script>

<template lang="pug">
div
  | pages/settings/index
</template>
