<script setup>
// -- data --
const collections = ref();

// -- props --
// const props = defineProps({});

// -- computed --
// const calculatedHeight = computed(() => { return ... })

// -- methods --
// const askQuestion = async () => { await ... }
const fetchCollections = async () => {
  const data = await $fetch("/api/collections/get");
  collections.value = data;
};
</script>

<template lang="pug">
.page-collections
  app-button(
    @click="fetchCollections"
    value="Fetch Collections"
    )
  pre collections: {{ collections }}

  hr.my-4

  nuxt-link(to="/collections/new") Create a new collection
</template>
