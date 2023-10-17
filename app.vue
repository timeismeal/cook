<script setup>
import { useAppStateStore } from "@/stores/appState";

const store = useAppStateStore();

const isDarkMode = computed(() => store.isDarkMode);

const htmlAttrs = computed(() => {
  return {
    "data-theme": isDarkMode.value ? "dark" : "light",
    class: isDarkMode.value ? "dark" : "light",
  };
});

useHead({
  htmlAttrs,
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
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
