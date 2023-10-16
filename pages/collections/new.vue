<script setup>
// -- data --
// const form = ref();
// form.value = ref({
//   label: "",
// });

// -- props --
const props = defineProps({
  value: {
    type: Object,
    default: () => ({}),
  },
});

// -- computed --
// const calculatedHeight = computed(() => { return ... })

// -- methods --
const onSubmit = () => {
  return "submitted";
};

// const fetchCollections = async () => {
//   const data = await $fetch("/api/collections/get");
//   collections.value = data;
// };
</script>

<template lang="pug">
div
  | Lovely Collections
  input.input.input-bordered.w-full.max-w-xs(
    type="text"
    class="focus:border-primary focus:ring-primary"
    )
</template>
