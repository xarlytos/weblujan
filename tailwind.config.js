/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        red: {
          950: '#450a0a',
          900: '#7f1d1d',
          800: '#991b1b',
          700: '#9b1c1c',
          600: '#dc2626',
          500: '#ef4444',
        },
      },
    },
  },
  plugins: [],
};
