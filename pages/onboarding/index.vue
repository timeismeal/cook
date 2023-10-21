<script setup>
const { isEmpty, sortBy } = useAppFunctions();
const db = useDb();

definePageMeta({
  layout: false,
});

// -- computed --
const dietaryOptions = computed(() => {
  const items = db.record.dietaryOptions || [];
  return sortBy(items, "label");
});

const fetchDietaryOptions = async () => {
  await useDbFunctions().fetchAndStore({
    table: "dietaryOptions",
    select: "id, label, is_popular, summary",
  });
};

onMounted(() => {
  fetchDietaryOptions();
});
</script>

<template lang="pug">
.page-confirm
  nuxt-layout(
    name="center-stage"
    )
    div.text-left.debug-red.w-500
      | So tell me about you...
      //- pre isEmpty: {{ isEmpty('love') }}

    div(
      v-for="dieto of dietaryOptions.filter((x) => x.is_popular)"
      x-for="dieto of dietaryOptions"
      )
      pre {{ dieto.label }}
    //- pre.w-500 dietaryOptions: {{ dietaryOptions }}

    //- .flex.flex-col.items-center


      .mb-5.mt-7
        brand(width="270" brand-color="#36454F")

      div
        | So tell me about you...

</template>
