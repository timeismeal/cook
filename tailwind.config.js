/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
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
        black: {
          DEFAULT: '#000000',
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
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
      fontFamily: {
        // 'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
        'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    themes: false, // ["dark", "light"],
    // darkTheme: "business",
    logs: false,
  },
}

