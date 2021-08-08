const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      grey: colors.trueGray,
      warmGrey: colors.warmGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue
    },
    extend: {
      fontFamily: {
        'mont': ['"Montserrat"', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
