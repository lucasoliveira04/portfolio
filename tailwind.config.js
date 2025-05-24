/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
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
