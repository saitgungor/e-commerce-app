/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    colors: {
      primary1: '#ffbba0',
      secondary: '#0b0a18',
    },
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
