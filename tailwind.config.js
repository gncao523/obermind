/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'premier-red': '#DC2626', // Primary red color
        'premier-red-dark': '#991B1B', // Darker red for gradients
        'premier-red-darker': '#7F1D1D', // Even darker for gradient end
      },
      fontFamily: {
        sans: ['Urbanist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

