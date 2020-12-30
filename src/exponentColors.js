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
        'hi-normal-text': 7.04,
      }
    },
    {
      name: 'dark',
      colorKeys: ['#000000', '#5e6678', '#ffffff'],
      ratios: {
        'lo-bg': -1.25,
        'hi-bg': -1.25,

        // Foreground must always be 1
        'lo-fg': 1,
        'hi-fg': 1,
        
        'lo-border': 3,
        'hi-border': 4.5,
        
        // Normally, 3, 4.5, and 7 would be fine.
        // Leonardo seems to have some kind of bug where `3` results in a contrast
        // ratio of `2.98`. Optically this should be fine, but will still cause a
        // failure in automated accessibility checkers. Adding `0.04` fixes this.
        'lo-large-text': 3.04,
        'hi-large-text': 4.54,
        
        'lo-normal-text': 4.54,
        'hi-normal-text': 7.04,
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

const lightPalette = generateTheme(100, 1)
const darkPalette = generateTheme(10, 1)

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
