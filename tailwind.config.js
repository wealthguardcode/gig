const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'home-hero':
          'https://images.unsplash.com/photo-1541777594744-addc2de9d110?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      },
      borderWidth: {
        16: '16px',
        32: '32px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[700]'),
            '--tw-prose-headings': theme('colors.gray[900]'),
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: theme('fontWeight.bold'),
            },
            a: {
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none',
              color: theme('colors.red[600]'),
            },
            'a:hover': {
              color: theme('colors.red[700]'),
            },
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.gray[400]'),
            '--tw-prose-headings': theme('colors.gray[300]'),
            'a:hover': {
              color: theme('colors.red[500]'),
            },
          },
        },
      }),
    },
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
