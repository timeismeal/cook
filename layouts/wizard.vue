<script setup>
useHead({
  bodyAttrs: {
    class: "",
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});

// -- setup --
const emit = defineEmits(["back", "next"]);
const { isEmpty } = useAppFunctions();

// -- props --
const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
  steps: {
    type: Object,
    default: () => ({
      back: null,
      next: null,
    }),
  },
  hideBack: {
    type: Boolean,
    default: false,
  },
});

// -- computed --
const isHideBack = computed(() => {
  if (isEmpty(props.steps.value)) return true;
  return isEmpty(props.steps.value.back);
});

// -- methods --
const onBack = () => {
  console.log("wizard onBack called..");
  emit("back");
};
const onNext = () => {
  console.log("wizard onNext called..");
  emit("next");
};
</script>

<template>
  <div
    class="flex justify-center xitems-center min-h-screen w-screen overflow-y-scroll"
  >
    <div class="m-8">
      <div class="flex justify-center mb-8">
        <Brand width="200" />
      </div>
      <nav aria-label="Progress" class="mb-6">
        <ol role="list" class="space-y-4 md:flex md:space-x-8 md:space-y-0">
          <li
            x-if="!isEmpty(props.steps)"
            v-for="bc in props.breadcrumbs"
            :key="bc.name"
            class="md:flex-1"
          >
            <a
              v-if="bc.status === 'complete'"
              :href="bc.href"
              class="text-decoration-none group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
            >
              <span
                class="text-xs font-medium text-indigo-600 group-hover:text-indigo-800"
                >{{ bc.id }}</span
              >
              <span class="text-sm font-medium">{{ bc.name }}</span>
            </a>
            <a
              v-else-if="bc.status === 'current'"
              :href="bc.href"
              class="text-decoration-none flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              aria-current="breadcrumb"
            >
              <span class="text-xs font-medium text-indigo-600">{{
                bc.id
              }}</span>
              <span class="text-sm font-medium">{{ bc.name }}</span>
            </a>
            <a
              v-else
              :href="bc.href"
              class="text-decoration-none group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
            >
              <span
                class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                >{{ bc.id }}</span
              >
              <span class="text-sm font-medium">{{ bc.name }}</span>
            </a>
          </li>
        </ol>
      </nav>
      <slot></slot>
      <FormInputStepperButtons
        @back="onBack"
        @next="onNext"
        :hideBack="isHideBack"
      />
    </div>
  </div>
</template>
