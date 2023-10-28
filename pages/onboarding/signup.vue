<script setup>
// -- imports --
// import { ... } from 'abc/def'

// -- setup --
// const db = useDb()
// const emit = defineEmits(['update:a', 'next'])
// const router = useRouter()
// const { isEmpty, sortBy } = useAppFunctions()

// -- data --
// const messages = ref([])

// -- props --
// const props = defineProps({ ... })

// -- computed --
// const calculatedHeight = computed(() => { return ... })

// -- methods --
// const askQuestion = async () => { await ... }

// -- watchers --
// watch(dataOrProp, async (neval) => { await ... })
// watch(dataOrProp, (newval, oldval) => { ... }, { immediate: true })
// watch(() => props.propName, (newval, oldval) => { ... }) // works better with props

// -- lifecycle hooks --
onMounted(() => {
  emit("mounted", {
    steps: {
      back: {
        to: "/onboarding/dislikes",
        // label: "Back", // optional
        // icon: "chevron-left", // optional
      },
      next: {
        to: "/",
        // label: "Next", // optional
        // icon: "chevron-right", // optional
      },
    },
  });
  fetchFoodDislikes();
});
// onMounted(() => { ... })
// onUpdated(() => { ... })
// onUnmounted(() => { ... })
// onBeforeMount(() => { ... })
// onBeforeUpdate(() => { ... })
// onBeforeUnmount(() => { ... })
// onErrorCaptured(() => { ... })
// onRenderTracked(() => { ... }) // dev-only
// onRenderTriggered(() => { ... }) // dev-only
// onActivated(() => { ... })
// onDeactivated(() => { ... })
// onServerPrefetch(() => { ... }) // ssr-only
</script>

<template>
  <h1 class="text-3xl font-semibold">Create your account</h1>
  <FormKit type="form" :actions="false">
    <FormKit type="email" />
    or
    <div class="button">Sign up using Google</div>
  </FormKit>
</template>
