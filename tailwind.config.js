/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: {max: "630px"}
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sigma: ['Sigmar', 'sans-serif'],
        boldonse: ['Boldonse', 'sans-serif'],

      },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
}

