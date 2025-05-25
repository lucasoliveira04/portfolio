/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        comic: ['"Comic Neue"', 'cursive'],
        fredoka: ['Fredoka', 'sans-serif'],
        bungeeOutline: ['"Bungee Outline"', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        winky: ['Winky Sans', 'sans-serif'],
        sigmarOne: ['Sigmar One', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        mobile: { min: '200px', max: '650px' },
      },
      colors: {
        primary: '#f8f9fa',
        textPrimary: '#38a3a5',
      },
    },
  },
};
