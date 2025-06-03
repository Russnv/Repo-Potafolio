/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app//*.{js,ts,jsx,tsx}",
    "./pages//*.{js,ts,jsx,tsx}",
    "./components//*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
      },
      colors: {
        background: "#EDE9FE",
        foreground: "#1F2937",
        primary: "#7C3AED",
        accent: "#F472B6"
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
