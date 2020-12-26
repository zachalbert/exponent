module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // Add high contrast (WCAG AAA compliant) variants
    plugin( function({ addVariant, e }) {
      addVariant('dark-AAA', ({ modifySelectors, separator }) => {
        modifySelectors( ({className}) => {
          return `.${e(`dark-AAA${separator}${className}`)}`
        })
      })
    },
  ],
}
