/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGradientStart: '#5094fa',
        customGradientEnd: '#fa50bc',
      },
    },
  },
  plugins: [],
}