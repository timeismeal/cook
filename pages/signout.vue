<script setup>
// -- data --
// const messages = ref([])

// -- props --
// const props = defineProps({});

// -- computed --
// const calculatedHeight = computed(() => { return ... })

// -- methods --
const signout = async () => {
  const { error } = await useSupabaseClient().auth.signOut();
};

onMounted(() => {
  signout();
  navigateTo("/login");
});
</script>

<template lang="pug">
div
	| Hello World!
</template>
