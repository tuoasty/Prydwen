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
      },
      colors:{
        lightning: "#c65ade",
        physical: "#979797",
        fire: "#ee473d",
        wind: "#61cf93",
        ice: "#2692d3",
        quantum: "#6057c9",
        imaginary: "#e6d863",
      }
    },
  },
  variants: {
    bgColor: ['group-hover', 'hover'],
    textColor: ['group-hover', 'hover'],
  },
}

