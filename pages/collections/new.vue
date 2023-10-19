<script setup>
import { debounce } from "lodash";
import { useDbStore } from "@/stores/db";

const filteredProductTypes = computed(() => {
  // console.log("filteredProductTypes", productTypes.value);
  // return productTypes;
  return query.value === ""
    ? productTypes.value
    : productTypes.value.filter((pt) => {
        return pt.label.toLowerCase().includes(query.value.toLowerCase());
      });
});

const sb = useSupabaseClient();
const db = useDbStore();
const user = useSupabaseUser();

const selectedProductType = ref();
const selectedProduct = ref();
const query = ref("");

// -- data --
const form = ref();

form.value = ref({
  collection: {
    label: "",
    desc: "",
    servings: "",
    prep_time_in_minutes: "",
    cook_time_in_minutes: "",
    profile_id: user.value.id,
  },
  products: [
    {
      collection_id: "",
      product_id: "",
      quantity_type_id: "",
      quantity: "",
      notes: "",
      product_attributes: ["FROZEN", "GLUTEN_FREE", "ORGANIC"],
    },
  ],
});
const searchProductText = ref("");
const products = ref([]);

// -- props --
const props = defineProps({
  value: {
    type: Object,
    default: () => ({}),
  },
});

// -- computed --
const productTypes = computed(() => {
  return db.productTypes || [];
});

// -- methods --
const debouncedSearch = debounce(async (text) => {
  await searchProducts(text);
}, 500);

const onSubmit = async () => {
  console.log("onSubmit");
  const { data, error } = await sb
    .from("collections")
    .insert([{ ...form.value.value }])
    .select();

  console.log("onSubmit data", data);
  console.log("onSubmit error", error);
  return "submitted";
};

const searchProducts = async (query) => {
  console.log("searchProducts", { query });
  console.log("searchProducts sb.$http", sb);
  // return "awesome";
  // const { data, error } = await sb.rpc("echo", { say: "i love you" });
  const { data, error } = await sb.rpc("search_products", { query });
  // const { data, error } = await sb.fetch("/search_products/" + query);
  console.log("searchProducts data", data);
  console.log("searchProducts error", error);
  products.value = data;
  return data;
};

onMounted(async () => {
  const pts = await $fetch("/api/productTypes/fetch", {
    method: "POST",
    body: { test: 123 },
  });
  db.setProductTypes(pts);
  // db.productTypes.value = pts;
  // console.log("onMounted productTypes", pts);
});

// const fetchCollections = async () => {
//   const data = await $fetch("/api/collections/get");
//   collections.value = data;
// };
</script>

<template>
  <FormInputProducts v-model="selectedProduct" />
  <pre>query: {{ query }}</pre>
  <pre>selectedProductType: {{ selectedProductType }}</pre>
  <FormInputCombobox
    :items="productTypes"
    v-model:query="query"
    v-model:value="selectedProductType"
  />
  <FormKit
    type="text"
    v-model="searchProductText"
    @input="debouncedSearch(searchProductText)"
    placeholder="Search product..."
  ></FormKit>

  <FormKit
    type="form"
    #default="{ value }"
    @submit="onSubmit"
    v-model="form.value"
    submit-label="Lets submit mofo"
  >
    <FormKit type="text" label="Label" name="label" />
    <FormKit type="textarea" label="Description" name="desc" />
    <FormKit type="number" label="Servings" name="servings" />
    <FormKit
      type="number"
      label="Prep time (in minutes)"
      name="prep_time_in_minutes"
    />
    <FormKit
      type="number"
      label="Cook time (in minutes)"
      name="cook_time_in_minutes"
    />

    <div class="mb-3"></div>
  </FormKit>
  <pre>form.value {{ form.value }}</pre>
  <pre>db {{ productTypes }}</pre>
</template>
