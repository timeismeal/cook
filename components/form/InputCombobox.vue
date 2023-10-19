<script setup>
import { debounce } from "lodash";
import { useDbStore } from "@/stores/db";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/vue";

const emit = defineEmits(["update:query", "update:value"]);

// -- data --
const selectedItem = ref();

// -- props --
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  query: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: null,
  },
  value: {
    type: [String, Object, Array],
    default: null,
  },
});

// -- computed --
const filteredItems = computed(() => {
  if (!props.items || !props.items.length) return [];
  return props.items.filter((item) => props.query);
});

// -- methods --
const onChange = (inputValue) => {
  emit("update:query", inputValue);
};

// -- watches --
watch(selectedItem, (value) => {
  emit("update:value", value);
});
</script>

<template>
  <!-- <Combobox as="div" v-model="value"> -->
  <Combobox as="div" v-model="selectedItem">
    <ComboboxLabel
      v-if="label"
      class="block text-sm font-bold leading-6 text-gray-900"
    >
      {{ label }}
    </ComboboxLabel>
    <div class="relative">
      <ComboboxInput
        class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        xchange="query = $event.target.value"
        @change="onChange($event.target.value)"
        :display-value="(item) => item?.label"
      />
      <ComboboxButton
        class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
      >
        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredItems.length > 0"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <ComboboxOption
          v-for="item in filteredItems"
          :key="item.id"
          :value="item"
          as="template"
          v-slot="{ active, selected }"
        >
          <li
            :class="[
              'relative cursor-default select-none py-2 pl-3 pr-9',
              active ? 'bg-indigo-600 text-white' : 'text-gray-900',
            ]"
          >
            <div class="flex">
              <span :class="['truncate', selected && 'font-semibold']">
                {{ item.label }}
              </span>
              <span
                :class="[
                  'ml-2 truncate text-gray-500',
                  active ? 'text-indigo-200' : 'text-gray-500',
                ]"
              >
                {{ item.label }}
              </span>
            </div>

            <span
              v-if="selected"
              :class="[
                'absolute inset-y-0 right-0 flex items-center pr-4',
                active ? 'text-white' : 'text-indigo-600',
              ]"
            >
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>
