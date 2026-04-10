/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#312D2A',
        accent: '#E91C1E',
        light: '#F0EFED',
        secondary: '#446E51'
      }
    },
  },
  plugins: [],
}
