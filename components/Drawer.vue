<script setup>
// -- imports --
// import { ... } from 'abc/def'

// -- setup --
// const db = useDb()
// const emit = defineEmits(['update:a', 'next'])
// const router = useRouter()
// const { isEmpty, sortBy } = useAppFunctions()

// -- data --
const isOpen = ref(false);

// -- props --
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  leftSide: {
    type: Boolean,
    default: false,
  },
});

// -- computed --
const mainClass = computed(() => {
  const items = ["drawer"];
  if (props.leftSide) items.push("drawer-end");
  return items.join(" ");
});

// -- methods --
// const askQuestion = async () => { await ... }

// -- watchers --
// watch(dataOrProp, async (neval) => { await ... })
// watch(dataOrProp, (newval, oldval) => { ... }, { immediate: true })

// -- lifecycle hooks --
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
  <div :class="mainClass">
    <input
      :id="props.id"
      type="checkbox"
      class="drawer-toggle"
      v-model="isOpen"
    />
    <div class="drawer-side">
      <label
        :for="props.id"
        aria-label="close sidebar"
        :class="{
          'drawer-overlay': true,
          'backdrop-blur': isOpen,
        }"
      ></label>
      <slot></slot>
    </div>
  </div>
</template>
