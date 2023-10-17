<script setup>
const isDark = false;

useHead({
  htmlAttrs: {
    "data-theme": isDark ? "dark" : "light",
    class: isDark ? "dark" : "light",
  },
  bodyAttrs: {
    class: "h-screen",
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});

// const user = useSupabaseUser();
// const route = useRoute();

onMounted(() => {
  // const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // console.log("onmounted isDarkMode", isDarkMode);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
