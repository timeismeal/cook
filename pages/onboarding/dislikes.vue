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
const foodDislikes = computed(() => {
  let items = db.record.foodDislikes || [];
  return sortBy(items, "products.label");
});

const fetchFoodDislikes = async () => {
  await useDbFunctions().fetchAndStore({
    table: "foodDislikes",
    select: "id, is_main, products (id, label)",
  });
};

// -- callback --
onMounted(() => {
  emit("mounted", {
    backTo: "/onboarding/allergies",
    nextTo: "/onboarding/signup",
  });
  fetchFoodDislikes();
});
</script>

<template>
  <div class="text-left max-w-500 xw-full">
    <div>
      <div class="mb-5">How about your dislikes?</div>
      <!-- <pre>db store: {{ db.record.foodDislikes }}</pre> -->
    </div>

    <FormKit type="form" :actions="false">
      <div
        class="overflow-hidden rounded-md border border-gray-300 bg-white mb-5"
      >
        <ul role="list" class="list-none divide-y divide-gray-300">
          <li
            v-for="fd of foodDislikes"
            :key="fd.id"
            class="flex items-start px-6 py-4 hover:bg-primary hover:text-white"
            :for="fd.id"
          >
            <input
              type="checkbox"
              class="checkbox form-checkbox h-6 w-6 text-primary mr-2"
              :id="fd.id"
              :value="fd.id"
              v-model="onboardingStore.data.dislikeProductIds"
            />
            <div>
              <div>
                <label class="font-semibold" :for="fd.id">{{
                  fd.products.label
                }}</label>
                <div v-if="isShowSummary" class="text-sm text-gray-500">
                  {{ fd.products.summary }}
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
