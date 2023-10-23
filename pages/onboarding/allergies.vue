<script setup>
import { useOnboardingStore } from "@/stores/onboarding";

const { isEmpty, sortBy } = useAppFunctions();
const db = useDb();
const onboardingStore = useOnboardingStore();
const isShowSummary = ref(false);
const isShowMore = ref(false);
const router = useRouter();

const steps = ref([
  { id: "Step 1", name: "Diet", href: "#", status: "complete" },
  { id: "Step 2", name: "Allergies", href: "#", status: "current" },
  { id: "Step 3", name: "Dislikes", href: "#", status: "upcoming" },
  { id: "Step 4", name: "Sign-up", href: "#", status: "signup" },
]);

definePageMeta({
  layout: false,
});

// -- computed --
const foodSensitivities = computed(() => {
  let items = db.record.foodSensitivities || [];
  return sortBy(items, "label");
  // items = items.sort((a, b) => {
  //   if (a.label === "None") return -1;
  //   if (b.label === "None") return 1;
  //   return a.label.localeCompare(b.label);
  // });
  // // return items;
  // return isShowMore.value ? items : items.filter((x) => x.is_popular);
});

const fetchFoodSensitivities = async () => {
  await useDbFunctions().fetchAndStore({
    table: "foodSensitivities",
    select: "id, label, summary",
  });
};

const onNext = () => {
  console.log("onNext called..");
  router.push("/onboarding/dislikes");
};

const onBack = () => {
  console.log("onBack called..");
  router.push("/onboarding/");
};

// -- callback --
onMounted(() => {
  fetchFoodSensitivities();
});
</script>

<template>
  <NuxtLayout name="center-stage">
    <div class="flex justify-center mb-8">
      <Brand width="200" />
    </div>
    <nav aria-label="Progress">
      <ol role="list" class="space-y-4 md:flex md:space-x-8 md:space-y-0">
        <li v-for="step in steps" :key="step.name" class="md:flex-1">
          <a
            v-if="step.status === 'complete'"
            :href="step.href"
            class="text-decoration-none group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
          >
            <span
              class="text-xs font-medium text-indigo-600 group-hover:text-indigo-800"
              >{{ step.id }}</span
            >
            <span class="text-sm font-medium">{{ step.name }}</span>
          </a>
          <a
            v-else-if="step.status === 'current'"
            :href="step.href"
            class="text-decoration-none flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
            aria-current="step"
          >
            <span class="text-xs font-medium text-indigo-600">{{
              step.id
            }}</span>
            <span class="text-sm font-medium">{{ step.name }}</span>
          </a>
          <a
            v-else
            :href="step.href"
            class="text-decoration-none group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
          >
            <span
              class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
              >{{ step.id }}</span
            >
            <span class="text-sm font-medium">{{ step.name }}</span>
          </a>
        </li>
      </ol>
    </nav>
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
                  <label class="font-semibold" :for="fs.id">{{
                    fs.label
                  }}</label>
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
        <FormInputStepperButtons @back="onBack()" @next="onNext()" hideBack />
      </FormKit>

      <pre class="mt-8">onboarding store: {{ onboardingStore.data }}</pre>
    </div>
  </NuxtLayout>
</template>
