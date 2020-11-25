const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'card': 300,
      },
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
