/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        bg_dark:"#14181D",
        bg_light:"#fffff"
      },
      container: {
        center: true, // Container'ı ortalar
        padding: '1rem', // Container'a padding ekler
        screens: {
          sm: '100%', // Küçük ekranlar için tam genişlik
          md: '640px', // Orta boyutlu ekranlar için genişlik
          lg: '768px', // Büyük ekranlar için genişlik
          xl: '1024px', // Extra büyük ekranlar için genişlik
        },
      },
    },
  },
  plugins: [],
};
