const { generateAdaptiveTheme } = require('@adobe/leonardo-contrast-colors')

let exponentPalette = {
  colorScales: [
    {
      name: 'light',
      colorKeys: ['#ffffff', '#5e6678', '#000000'],
      ratios: {
        'lo-bg': 1.1,
        'hi-bg': 1,

        'lo-fg': 1,
        'hi-fg': 1,
        
        'lo-border': 3,
        'hi-border': 4.5,
        
        'lo-large-text': 3,
        'hi-large-text': 4.5,
        
        'lo-normal-text': 4.5,
        'hi-normal-text': 7,
      }
    },
    {
      name: 'dark',
      colorKeys: ['#000000', '#5e6678', '#ffffff'],
      ratios: {
        'lo-bg': 1.1,
        'hi-bg': 1,

        // Any amount over 1.0 must be added to text
        'lo-fg': 1.5,
        'hi-fg': 1,
        
        'lo-border': 3,
        'hi-border': 4.5,
        
        // Normally, a ratio of 3 would be specified. But since foreground color is
        // 1.5, we need to add an additional 0.5
        'lo-large-text': 3.5,
        'hi-large-text': 5,
        
        'lo-normal-text': 5,
        'hi-normal-text': 7.5,
      }
    },
    {
      name: 'blue',
      colorKeys: ['#5CDBFF', '#0000FF'],
      ratios: {
        'BLUE_LARGE_TEXT': 3,
        'BLUE_TEXT': 4.5
      }
    },
    {
      name: 'red',
      colorKeys: ['#FF9A81', '#FF0000'],
      ratios: {
        'RED_LARGE_TEXT': 3,
        'RED_TEXT': 4.5
      }
    }
  ],
  baseScale: 'light',
};

const generateTheme = generateAdaptiveTheme( exponentPalette )

const lightPalette = generateTheme(97, 1)
const darkPalette = generateTheme(2, 1.5)

const lightTheme = lightPalette.reduce( (acc, item) => {
  if( 'name' in item ) {
    const cssMap = {}
    item.values.forEach( (value) => cssMap[value.name] = value.value )
    acc[item.name] = cssMap
  }
  return acc
}, {})


const darkTheme = darkPalette.reduce( (acc, item) => {
  if( 'name' in item ) {
    const cssMap = {}
    item.values.forEach( (value) => cssMap[value.name] = value.value )
    acc[item.name] = cssMap
  }
  return acc
}, {})

module.exports = {
  lightTheme,
  darkTheme
}
