<script setup lang="ts">
const pulseSize = 6;
const user = useSupabaseUser();
const route = useRoute();

definePageMeta({
  layout: false,
});

onMounted(() => {
  watch(
    user,
    (user, prevUser) => {
      console.log("the watch has ended", user, prevUser);
      if (prevUser && !user) {
        // user logged out
        router.push("/login");
      } else if (user && typeof route.query.redirect === "string") {
        console.log("redirecting", route);
        // user logged in
        navigateTo(route.query.redirect);
      } else if (user) {
        navigateTo("/");
      }
    },
    { immediate: true }
  );
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
