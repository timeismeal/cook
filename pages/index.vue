<script setup>
const products = ref([]);

const fetchProducts = async () => {
  const data = await $fetch("/api/products/get");
  products.value = data;
};
</script>

<template lang="pug">
.page-index
  app-button(
    @click="fetchProducts"
    value="Fetch Products"
    )

  pre products: {{ products }}
</template>
