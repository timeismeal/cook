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
          DEFAULT: '#4ABFE2',
          100: "#E4F7FD",
          200: "#BBE7F6",
          300: "#94D7EF",
          400: "#6CC7E8",
          500: "#4ABFE2",
          600: "#3DAFD2",
          700: "#3399B9",
          800: "#297F9E",
          900: "#1E657F",
        },
      },
    },
  },
  plugins: [],
}

