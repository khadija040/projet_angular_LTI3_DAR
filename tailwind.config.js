/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        deppBurgundy: '#650015', // Nom personnalisé
        deepRed: '#CC0000',
        wineRed: '#9F1D35',
        scarlet: '#650016',
      },
      fontFamily: {
        'playwrite': ['Playwrite India', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

