<script setup>
const head = useHead({
  bodyAttrs: {
    class: "h-screen overflow-hidden",
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});

// -- props --
const props = defineProps({
  leftBackgroundImage: {
    type: String,
    default: null,
  },
});

// -- data --
// const messages = ref([])

// -- computed --
// const calculatedHeight = computed(() => { return ... })

// -- methods --
// const askQuestion = async () => { await ... }
</script>

<template lang="pug">
.h-screen.flex

  //- Left Column
  .flex-1.bg-cover.bg-center.bg-no-repeat(
    xclass="`bg-[url('${props.leftBackgroundImage}')]`"
    :style="props.leftBackgroundImage ? `background-image: url('${props.leftBackgroundImage}')` : null"
    )
    slot(name="leftside")

  //- Right Column
  .flex-1
    slot(name="rightside")


</template>
