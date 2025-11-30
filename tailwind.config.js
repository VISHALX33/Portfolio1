/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981',
          light: '#22c55e',
          dark: '#065f46',
        },
        bg: {
          light: '#f9fafb',
          subtle: '#d1fae5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        'lift': '0 6px 18px -5px rgba(16,185,129,0.25)',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
};