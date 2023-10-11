<script setup>
const user = useSupabaseUser();
const route = useRoute();
onMounted(() => {
  watch(
    user,
    (user, prevUser) => {
      if (prevUser && !user) {
        // user logged out
        router.push("/login");
      } else if (user && typeof route.query.redirect === "string") {
        console.log("redirecting", route);
        // user logged in
        navigateTo(route.query.redirect);
      }
    },
    { immediate: true }
  );
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
