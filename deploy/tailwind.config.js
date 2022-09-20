/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quote: ['Alef'],
        heading: ['Itim'],
        content: ['Inter'],
        form: ['Poppins'],
      },
    },
  },
  plugins: [],
};