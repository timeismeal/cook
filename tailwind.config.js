/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C6447',
          100: "#A9D1BF",
          200: "#87C4AA",
          300: "#65B793",
          400: "#44AA7C",
          500: "#2C6447",
          600: "#2C543E",
          700: "#2C4534",
          800: "#2C352B",
          900: "#2C2421",
        },
      },
    },
  },
  plugins: [],
}

