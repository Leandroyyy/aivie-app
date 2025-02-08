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
        'aivie-small-text-light-gray': '#B9B9B9',
        'aivie-border-gray': '#C9C9C9',
        'aivie-gray': '#F5F6FB',
      },
    },
  },
  plugins: [],
};
