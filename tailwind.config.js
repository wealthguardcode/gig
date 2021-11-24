const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indiGogo: '#818cf8',
        spaceBlue: '#60a5fa',
        grassGreen: '#34d399',
        strokeGray: 'rgb(112, 112, 112)',
        grassGreen: '#b45309',
      },
    },
  },
  variants: {
    extend: { display: ['responsive', 'group-hover', 'group-focus'] },
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
