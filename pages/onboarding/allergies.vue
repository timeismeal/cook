<script setup>
import { useOnboardingStore } from "@/stores/onboarding";

const { sortBy } = useAppFunctions();
const db = useDb();
const onboardingStore = useOnboardingStore();
const isShowSummary = ref(false);
const isShowMore = ref(false);
const emit = defineEmits(["mounted"]);

const steps = ref([
  { id: "Step 1", name: "Diet", href: "#", status: "complete" },
  { id: "Step 2", name: "Allergies", href: "#", status: "current" },
  { id: "Step 3", name: "Dislikes", href: "#", status: "upcoming" },
  { id: "Step 4", name: "Sign-up", href: "#", status: "signup" },
]);

// -- computed --
const foodSensitivities = computed(() => {
  let items = db.record.foodSensitivities || [];
  return sortBy(items, "label");
});

const fetchFoodSensitivities = async () => {
  await useDbFunctions().fetchAndStore({
    table: "foodSensitivities",
    select: "id, label, summary",
  });
};

// -- callback --
onMounted(() => {
  emit("mounted", {
    backTo: "/onboarding/",
    nextTo: "/onboarding/dislikes",
  });
  fetchFoodSensitivities();
});
</script>

<template>
  <div class="text-left max-w-500 xw-full">
    <div>
      <!-- <h1 class="my-5 text-3xl font-semibold">Welcome!</h1> -->
      <div class="mb-5">How about your food allergies</div>
    </div>

    <FormKit type="form" :actions="false">
      <div
        class="overflow-hidden rounded-md border border-gray-300 bg-white mb-5"
      >
        <!-- <pre>Food Sensitivities {{ foodSensitivities }}</pre> -->
        <ul role="list" class="list-none divide-y divide-gray-300">
          <li
            v-for="fs of foodSensitivities"
            :key="fs.id"
            class="flex items-start px-6 py-4 hover:bg-primary hover:text-white"
            :for="fs.id"
          >
            <input
              type="checkbox"
              class="checkbox form-checkbox h-6 w-6 text-primary mr-2"
              :id="fs.id"
              :value="fs.id"
              v-model="onboardingStore.data.foodSensitivityIds"
            />
            <div>
              <div>
                <label class="font-semibold" :for="fs.id">{{ fs.label }}</label>
                <div v-if="isShowSummary" class="text-sm text-gray-500">
                  {{ fs.summary }}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <a @click="isShowMore = !isShowMore"
        >Show {{ isShowMore ? "less" : "more" }}</a
      >
    </FormKit>

    <pre class="mt-8">onboarding store: {{ onboardingStore.data }}</pre>
  </div>
</template>
