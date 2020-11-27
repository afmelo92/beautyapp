const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'card': 300,
      },
      height: {
        'banner': 600,
      }
    },
    colors: {
      gray: colors.trueGray,
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
