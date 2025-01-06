/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  variants: {
    bgColor: ['group-hover', 'hover'],
    textColor: ['group-hover', 'hover'],
  },
}

