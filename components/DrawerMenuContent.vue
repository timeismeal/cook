<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    <li v-for="item of items" :key="item.name" class="flex flex-row">
      <NuxtLink :to="item.to" class="link font-semibold">
        <Icon
          v-if="item.icon"
          :icon="item.icon"
          class="text-black opacity-30 dark:text-white"
        />
        {{ item.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
