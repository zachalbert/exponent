const { generateAdaptiveTheme, generateContrastColors } = require('@adobe/leonardo-contrast-colors')

let myTheme = generateAdaptiveTheme({
  colorScales: [
    {
      name: 'gray',
      colorKeys: ['#FFcaca'],
      ratios: {
        'GRAY_LOW_CONTRAST': 2,
        'GRAY_LARGE_TEXT': 3,
        'GRAY_TEXT': 4.5,
        'GRAY_HIGH_CONTRAST': 8
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
  baseScale: 'gray',
  brightness: 97
});

console.log('blah',myTheme);

module.exports = {
  
  myTheme

  
  // colors: {
  //   example: {
  //     DEFAULT: '#CC0000',
  //     high: '#FF0000',
  //     dark: '#00CC00',
  //     'dark-high': '#00FF00',
  //   },
  //   neutral: generateContrastColors({
  //     colorKeys: [
  //       '#FFCCCC',
  //       '#FF8888',
  //     ],
  //     base: '#FFF0F0',
  //     ratios: [3.5, 4, 7],
  //     colorspace: 'LCH',
  //   })
  // }
}
