/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f8',
          100: '#d5ddef',
          200: '#aabade',
          300: '#7a94c9',
          400: '#4d71b5',
          500: '#2d559e',
          600: '#1e3f82',
          700: '#162e61',
          800: '#0f2047',
          900: '#0d1b3e',
          950: '#070e22',
        },
        lime: {
          50: '#f6fbe8',
          100: '#ecf7d1',
          200: '#d5eda4',
          300: '#b9de6a',
          400: '#a8c629',
          500: '#8daa1a',
          600: '#6e8712',
          700: '#526610',
          800: '#3d4d0e',
          900: '#2d380b',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
