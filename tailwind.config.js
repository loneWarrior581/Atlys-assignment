/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-bg': '#27292D',
        'gray-primary': '#C5C7CA',
        'gray-secondary': '#7F8084',
        'blue-primary': '#4A96FF',
        'blue-secondary': '#3b82f6',
        'black-bg': '#191920',
        'gray-border': '#35373B',
      },
    },
  },
  plugins: [],
}
