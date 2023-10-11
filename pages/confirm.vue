<script setup lang="ts">
import { EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline";

const pulseSize = 6;

definePageMeta({
  layout: false,
});

const pulseClass = computed(() => {
  return `h-${pulseSize} w-${pulseSize}`;
});
</script>

<template lang="pug">
.page-confirm
  nuxt-layout(
    name="center-stage"
    )
    .flex.flex-col.items-center

      .relative.flex.animate-bounce(:class="pulseClass")
        .animate-ping.absolute.inline-flex.h-full.w-full.rounded-full.bg-primary-400.opacity-75
        .relative.inline-flex.rounded-full.bg-primary-500(:class="pulseClass")

      .mb-5.mt-7
        brand(width="270" brand-color="#36454F")

      //- .animate-spin.h-10.w-10.mx-auto
        EllipsisHorizontalCircleIcon.text-gray-500.text-opacity-50

      .w-fit.text-gray-500.text-xl.font-bold.mt-5
        | Checking your grocery pass

      //- .w-fit.text-gray-400.text-sm.font-semibold
        | Reviewing your recipe for entry
</template>
