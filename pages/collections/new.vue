<script setup>
// -- data --
// const form = ref();
// form.value = ref({
//   label: "",
// });

// -- props --
// const props = defineProps({});

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
.page-collections-new.debug-red
	| Let's create a new collection

	FormKit

	//- FormKit(
		type="form"
		xdefault="{ value }"
		xsubmit="onSubmit"
		xvalue="data"
		)

		//- form-kit(
			type="text"
			label="Collection name"
			name="label"
			xvalidation="required"
			help="This is the name of your collection"
			)

</template>
