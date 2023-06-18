const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth: {
        16: '16px',
        32: '32px',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      height: {
        'screen-header': 'calc(100vh - 64px)',
      },
      maxWidth: {
        'screen-xs': '480px',
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus'],
      borderWidth: ['first', 'last'],
      borderColor: ['first', 'last'],
    },
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.hide-scrollbar-hover:hover': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }),
  ],
}
