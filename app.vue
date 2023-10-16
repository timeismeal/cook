<script setup>
useHead({
  htmlAttrs: {
    "data-theme": "light",
  },
  bodyAttrs: {
    class: "h-screen xoverflow-hidden",
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});

const user = useSupabaseUser();
const route = useRoute();
// onMounted(() => {
//   watch(
//     user,
//     (user, prevUser) => {
//       if (prevUser && !user) {
//         // user logged out
//         navigateTo("/login");
//       } else if (user && typeof route.query.redirect === "string") {
//         // user logged in
//         navigateTo(route.query.redirect);
//       }
//     },
//     { immediate: true }
//   );
// });
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
