<script setup lang="ts">
const supabase = useSupabaseClient();
const loading = ref(false);
const email = ref("hi@chadtaylor.io");
const isInstructionsSent = ref(true);

definePageMeta({
  layout: false,
});

const onPasswordReset = async () => {
  try {
    loading.value = true;
    let response = null;

    response = await supabase.auth.resetPasswordForEmail(email.value, {
      // redirectTo: "http://localhost:3000/api/auth/callback?next=/confirm",
    });

    console.log("password-reset response", response);

    // Error Management
    const { data, error } = response;
    if (error) {
      console.error("supabase error", error);
      throw error;
    }
  } catch (error) {
    console.error("supabase error", error);
  } finally {
    loading.value = false;
    isInstructionsSent.value = true;
  }
};
</script>

<template lang="pug">
.page-password-reset
  nuxt-layout(
    name="center-stage"
    )

    .password-reset-form(v-if="!isInstructionsSent")

      .p-4(class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8")
        div(class="sm:mx-auto sm:w-full sm:max-w-sm")
          .flex.items-center.justify-center
            brand(width="300")
          h2.mt-10.text-center.text-2xl.font-bold.leading-9.tracking-tight.text-gray-600.mb-1
            | Cooking up a new password?
          .text-sm.text-gray-400 We will send you password reset instructions to your email
        div(class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm")

          form(
            class="space-y-6"
            @submit.prevent="onPasswordReset"
            )

            div

              label(for="email" class="block text-sm font-medium leading-6 text-gray-900")
                | Email address

              div(class="mt-2")
                input(
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  v-model="email"
                  placeholder="Your email"
                  )

            div
              input(
                type="submit"
                class="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                :value="loading ? 'Loading...' : 'Send me reset instructions'"
                :disabled="loading"
                )

      .text-center
        nuxt-link.text-primary(to="/login") Back to login

    .password-reset-instructions(v-else)
      .p-4(class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8")
        div(class="sm:mx-auto sm:w-full sm:max-w-sm")
          .flex.items-center.justify-center
            brand(width="300")
          h2.mt-10.text-center.text-2xl.font-bold.leading-9.tracking-tight.text-gray-600.mb-1
            | Reset ingredients dispatched!
        div(class="mt-9 xsm:mx-auto sm:w-full sm:max-w-lg")

          | Alright, we've zipped an email over to {{ email }} with all the secret spices to whip up a new password.
          | Give it a few, and if it hasn't landed on your plate, double-check you've got the right email for your Time is Meal account.
          | If things still look fishy, shoot us an email at support@timeismeal.com. We're here to serve!

        .text-center.mt-10
          nuxt-link.text-primary(to="/login")
            icon(
              icon="back"
              class="mr-1"
              weight="outline"
              size="5"
              )
            | Back to login

</template>
