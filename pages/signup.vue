<script setup lang="ts">
const supabase = useSupabaseClient();
const loading = ref(false);
const email = ref("hi@chadtaylor.io");
const password = ref("ToAllAGoodNight!");

definePageMeta({
  layout: false,
});

const handleLogin = async (method) => {
  try {
    loading.value = true;
    let response = null;

    if (method === "email") {
      response = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
    } else if (method === "google") {
      response = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/confirm",
        },
      });
    } else {
      return console.error("Invalid login method");
    }

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
  }
};
</script>

<template lang="pug">
.page-signin
  nuxt-layout(
    name="split"
    left-background-image="/images/eduardo-soares-QsYXYSwV3NU-unsplash.jpg"
    )

    //- *** LEFT SIDE ***
    template(#leftside)

      .flex.grid.content-center.justify-items-end.h-screen
        .p-8.bg-black.bg-opacity-60.text-white.rounded-tl-lg.rounded-bl-lg(class="w-2/3")
          .font-bold.text-xl Meet Culinia, Your AI Sous Chef
          .mt-4
            | "Oh @#$! I forgot the milk!"
          .mt-4
            | With Chef Culinia on your team, those kitchen slip-ups are history.
            | Our AI-planner ensures every grocery run is spot-on, leaving no ingredient behind.

    //- *** RIGHT SIDE ***
    template(#rightside)

      .p-4(class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8")
        div(class="sm:mx-auto sm:w-full sm:max-w-sm")
          .flex.items-center.justify-center
            brand(width="300")
          h2.mt-10.text-center.text-2xl.font-bold.leading-9.tracking-tight.text-gray-600
            | Get your apron on!
        div(class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm")

          form(
            class="space-y-6"
            @submit.prevent="handleLogin('google')"
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
              div(class="flex items-center justify-between")
                label(for="password" class="block text-sm font-medium leading-6 text-gray-900")
                  | Password
                div(class="text-sm")
                  a(href="#" class="font-semibold text-primary-600 hover:text-primary-500")
                    | Forgot password?
              div(class="mt-2")
                input(
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  v-model="password"
                  )

            div
              input(
                type="submit"
                class="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                :value="loading ? 'Loading...' : 'Log in'"
                :disabled="loading"
                )

            .leading-9
              input(
                type="submit"
                class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                :value="loading ? 'Loading...' : 'Log in with Google'"
                :disabled="loading"
                )

          p(class="mt-10 text-center text-sm text-gray-500")
            | Not a member?
            | {{ " " }}
            a(href="#" class="font-semibold leading-6 text-primary-600 hover:text-primary-500")
              | Start a 14 day free trial

</template>
