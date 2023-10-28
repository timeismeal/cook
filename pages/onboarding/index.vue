<script setup>
import { useOnboardingStore } from "@/stores/onboarding";

// const { isEmpty, sortBy } = useAppFunctions();
const db = useDb();
const onboardingStore = useOnboardingStore();
const isShowSummary = ref(false);
const isShowMore = ref(false);
const router = useRouter();
const emit = defineEmits(["mounted"]);

// -- props --
// const props = defineProps({ });

// -- computed --
const dietaryOptions = computed(() => {
  let items = db.record.dietaryOptions || [];
  items = items.sort((a, b) => {
    if (a.label === "None") return -1;
    if (b.label === "None") return 1;
    return a.label.localeCompare(b.label);
  });
  // return items;
  return isShowMore.value ? items : items.filter((x) => x.is_popular);
});

const fetchDietaryOptions = async () => {
  await useDbFunctions().fetchAndStore({
    table: "dietaryOptions",
    select: "id, label, is_popular, summary",
  });
};

// -- watchers --

// -- callback --
onMounted(() => {
  emit("mounted", {
    backTo: null,
    nextTo: "/onboarding/allergies",
  });
  fetchDietaryOptions();
});
</script>

<template>
  <div class="text-left max-w-500 xw-full">
    <div>
      <h1 class="my-5 text-3xl font-semibold">Welcome!</h1>
      <div class="mb-5">
        Before we begin, what's your dietary preference? It'll help us customize
        your grocery planning.
      </div>
    </div>

    <FormKit type="form" :actions="false">
      <div
        class="overflow-hidden rounded-md border border-gray-300 bg-white mb-5"
      >
        <ul role="list" class="list-none divide-y divide-gray-300">
          <li
            v-for="diet of dietaryOptions"
            x-for="diet of dietaryOptions"
            :key="diet.id"
            class="flex items-start px-6 py-4 hover:bg-primary hover:text-white"
            :for="diet.id"
          >
            <input
              type="radio"
              class="radio form-radio radio-lovely-red h-6 w-6 text-primary mr-2"
              :id="diet.id"
              :value="diet.id"
              x-model="form.values.dietaryOptionId"
              v-model="onboardingStore.data.dietaryRestrictionId"
            />
            <div>
              <div>
                <label class="font-semibold" :for="diet.id">{{
                  diet.label
                }}</label>
                <div v-if="isShowSummary" class="text-sm text-gray-500">
                  {{ diet.summary }}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <a @click="isShowMore = !isShowMore"
        >Show {{ isShowMore ? "less" : "more" }}</a
      >
      <!-- <FormInputStepperButtons @back="onBack()" @next="onNext()" hideBack /> -->
    </FormKit>

    <!-- <pre class="mt-8">onboarding store: {{ onboardingStore.data }}</pre> -->
  </div>
</template>
