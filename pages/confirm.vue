<script setup lang="ts">
const user = useSupabaseUser();
const sb = useSupabaseClient();

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo("/");
    }
  },
  { immediate: true }
);
</script>

<template lang="pug">
div
  .border.p-2.rounded.mb-3 Waiting for login...
  pre user {{ user }}
  pre u {{ u }}
</template>
