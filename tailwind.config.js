/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'poor-story': ['Poor Story', 'cursive'],
      },
    },
  },
  plugins: [

    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
}