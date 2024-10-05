/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/homebg.jpg')",
        'space-bg': "url('/spacebg.jpg')",
      },
    },
  },
  plugins: [],
}