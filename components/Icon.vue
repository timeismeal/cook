<script setup>
// -- data --
// const messages = ref([])

// -- props --
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    default: "outline",
  },
  size: {
    type: [Number, String],
    default: "5",
  },
  spin: {
    type: Boolean,
    default: false,
  },
});

// -- computed --
const iconClass = computed(() => {
  const items = [];
  items.push(`w-${props.size}`);
  items.push(`h-${props.size}`);
  if (props.spin) items.push("animate-spin");
  return items.join(" ");
});

const iconName = computed(() => {
  const x = {
    back: "ArrowLeftCircle",
    collection: "QueueList",
    moon: "Moon",
    "shopping-cart": "ShoppingCart",
    "stepper-back": "ChevronLeft",
    "stepper-next": "ChevronRight",
    sun: "Sun",
  }[props.icon];
  return `${x}Icon`;
});

// -- methods --

let icons = null;
if (props.weight === "outline") {
  icons = await import("@heroicons/vue/24/outline");
} else if (props.weight === "solid") {
  icons = await import("@heroicons/vue/24/solid");
} else {
  throw new Error("Invalid weight");
}
</script>

<template lang="pug">
.inline-block.w-5.h-5
	component.inline-block(
		:is="icons[iconName]"
		:class="iconClass"
		)
</template>
