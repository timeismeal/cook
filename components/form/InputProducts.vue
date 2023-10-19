<script setup>
import { debounce } from "lodash";
import { useDbStore } from "@/stores/db";

// -- data --
const sb = useSupabaseClient();
const db = useDbStore();
// const user = useSupabaseUser();
const selectedProduct = ref();
const query = ref("");

// -- props --
defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

// -- computed --
const products = computed(() => {
  return db.products || [];
});

const filteredProducts = computed(() => {
  return query.value === ""
    ? products.value
    : products.value.filter((p) => {
        return p.label.toLowerCase().includes(query.value.toLowerCase());
      });
});

// -- methods --
const debouncedSearch = debounce(async (q) => {
  await searchProducts(q);
}, 250);

const searchProducts = async (q) => {
  const { data, error } = await sb.rpc("search_products", { query: q });
  db.setProducts(data);
};

// -- watchers --
watch(query, async (q) => {
  await debouncedSearch(q);
});

watch(selectedProduct, (value) => {
  emit("update:modelValue", value);
});
</script>

<template>
  <pre>query: {{ query }}</pre>
  <!-- <pre>filteredProducts: {{ filteredProducts }}</pre> -->
  <!-- <pre>products: {{ products }}</pre> -->
  <FormInputCombobox
    :items="filteredProducts"
    label="Select Product"
    v-model:query="query"
    v-model:value="selectedProduct"
  />
</template>
