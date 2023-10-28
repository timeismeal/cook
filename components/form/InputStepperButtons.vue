<script setup>
// -- data --
// const messages = ref([])
const emit = defineEmits(["back", "next"]);
const router = useRouter();

// -- props --
const props = defineProps({
  hideBack: {
    type: Boolean,
    default: false,
  },
  hideNext: {
    type: Boolean,
    default: false,
  },
});

// -- computed --
// const calculatedHeight = computed(() => { return ... })

// -- methods --
const onBack = () => {
  emit("back");
};
const onNext = () => {
  emit("next");
};
</script>

<template>
  <div id="form-input-stepper" class="flex justify-end">
    <div
      v-if="!hideBack"
      class="button button-secondary mr-3 pointer"
      @click="onBack"
    >
      <Icon icon="stepper-back" />
      Back
    </div>
    <div v-if="!hideNext" class="button pointer" @click="onNext">
      Next
      <Icon icon="stepper-next" />
    </div>
  </div>
</template>
