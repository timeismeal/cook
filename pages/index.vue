<script setup>
const products = ref([]);

const fetchProducts = async () => {
  const data = await $fetch("/api/products/fetch");
  products.value = data;
};
</script>

<template lang="pug">
.page-index
  app-button(
    @click="fetchProducts"
    value="Fetch Products"
    )

  .my-5
    nuxt-link(to="/onboarding")
      | Go to Onboarding

  pre products: {{ products }}
</template>
