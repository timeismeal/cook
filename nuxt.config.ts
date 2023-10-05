// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv'

dotenv.config()

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
  },
  modules: [
    // '@vueuse/nuxt',
    // 'stripe-next',
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    openAi: {
      key: process.env.OPENAI_KEY,
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  formkit: {
    autoImport: true,
  },
})