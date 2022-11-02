/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway'],
        Narrow: ['PT Sans Narrow'],
        RobotoCondensed: ['Roboto Condensed'],
      },
    },
  },
  plugins: [],
};
