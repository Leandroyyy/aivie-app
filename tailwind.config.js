/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'aivie-light-green': '#00905A',
        'aivie-green': '#00875F',
        'aivie-light-gray': '#F0F1F5',
        'aivie-text-light-gray': '#808A99',
        'aivie-border-gray': '#C9C9C9',
      },
    },
  },
  plugins: [],
};
