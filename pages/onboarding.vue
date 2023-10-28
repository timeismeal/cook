<script setup>
definePageMeta({
  layout: false,
});

const { isEmpty } = useAppFunctions();
const router = useRouter();

const steps = ref({
  back: null,
  next: null,
});

const breadcrumbs = ref([
  { id: "Step 1", name: "Diet", href: "#", status: "complete" },
  { id: "Step 2", name: "Allergies", href: "#", status: "current" },
  { id: "Step 3", name: "Dislikes", href: "#", status: "upcoming" },
  { id: "Step 4", name: "Sign-up", href: "#", status: "signup" },
]);

const isHideBack = computed(() => {
  return isEmpty(step.value.back);
});

const onBack = () => {
  router.push(steps.value.back.to);
};

const onNext = () => {
  router.push(step.value.next.to);
};

const onChildMounted = (e) => {
  console.log("pages/onboarding child mounted", e);
  steps.value = e.steps;
};
</script>

<template>
  <NuxtLayout
    name="wizard"
    :breadcrumbs="breadcrumbs"
    @back="onBack"
    @next="onNext"
    :steps="steps"
  >
    <NuxtPage @mounted="onChildMounted" />
  </NuxtLayout>
</template>
