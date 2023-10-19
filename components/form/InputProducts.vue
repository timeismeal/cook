<script setup>
import { debounce } from "lodash";
import { useDbStore } from "@/stores/db";

// -- data --
const sb = useSupabaseClient();
const db = useDbStore();
const user = useSupabaseUser();
const selectedProduct = ref();
const query = ref("");

// -- props --
// const props = defineProps({
// })

// -- computed --
const products = computed(() => {
  return db.products || [];
});

const filteredProducts = computed(() => {
  console.log("filteredProducts", products);
  return query.value === ""
    ? products
    : products.filter((p) => {
        return p.label.toLowerCase().includes(query.value.toLowerCase());
      });
});

// -- methods --
const debouncedSearch = debounce(async (q) => {
  await searchProducts(q);
}, 500);

const searchProducts = async (q) => {
  console.log("searchProducts", { query: q });
  const { data, error } = await sb.rpc("search_products", { query });
  console.log("searchProducts data", data);
  console.log("searchProducts error", error);
  db.setProducts(data);
  // products.value = data;
  return data;
};
</script>

<template>
  <pre>query: {{ query }}</pre>
  <pre>filteredProducts: {{ filteredProducts }}</pre>
  <pre>products: {{ products }}</pre>
  <FormInputCombobox
    :items="filteredProducts"
    label="Select Product"
    v-model:query="query"
    v-model:value="selectedProduct"
  />
</template>
