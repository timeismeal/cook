<script setup>
import { kebabCase, debounce } from "lodash";
import { useDbStore } from "@/stores/db";

// -- data --
const db = useDbStore();
const selectedProduct = ref();
const query = ref("");

// -- props --
const props = defineProps({
  modelValue: Object,
  label: {
    type: String,
    default: "Select product",
  },
});
const emit = defineEmits(["update:modelValue"]);

// -- computed --
const products = computed(() => {
  return db.record.products || [];
});

const productTypes = computed(() => {
  return db.record.productTypes || [];
});

const productGroups = computed(() => {
  return db.record.productGroups || [];
});

const filteredProducts = computed(() => {
  if (query.value === "") return products.value;
  const filtered = products.value.filter((p) => {
    return p.label.toLowerCase().includes(query.value.toLowerCase());
  });
  return filtered.map((p) => {
    return {
      label: p.label,
      sublabel: convertIdsToLabels(
        p.product_group_id,
        productGroups.value
      ).join(", "),
      data: p,
    };
  });
});

// -- methods --
const convertIdsToLabels = (ids, datas) => {
  if (!Array.isArray(ids)) ids = [ids];
  if (!ids || !ids.length) return [];
  return ids.map((id) => {
    return datas.find((data) => data.id === id).label;
  });
};

const debouncedSearch = debounce(async (q) => {
  await searchProducts(q);
}, 250);

const searchProducts = async (q) => {
  const { data, error } = await $fetch(`/api/products/search?q=${q}`);
  db.set("products", data);
};

// -- watchers --
watch(query, async (q) => {
  await debouncedSearch(q);
});

watch(selectedProduct, (value) => {
  emit("update:modelValue", value);
});

onMounted(async () => {
  ["productGroups", "productTypes"].forEach(async (record) => {
    if (db[record]) return;
    const data = await $fetch(`/api/${kebabCase(record)}/fetch`);
    db.set(record, data);
  });
});
</script>

<template>
  <FormInputCombobox
    :items="filteredProducts"
    :label="props.label"
    v-model:query="query"
    v-model:value="selectedProduct"
  />
</template>
