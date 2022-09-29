const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      accent: colors.indigo,
      textAccent: colors.white,
      primary: colors.slate,
    },
    extend: {},
  },
  plugins: [],
}
