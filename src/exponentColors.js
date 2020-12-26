const { generateAdaptiveTheme, generateContrastColors } = require('@adobe/leonardo-contrast-colors')

let exponentTheme = generateAdaptiveTheme({
  colorScales: [
    {
      name: 'gray',
      colorKeys: ['#cacaca'],
      ratios: {
        'low-contrast': 2,
        'large-text': 3,
        'text': 4.5,
        'high-contrast': 8
      }
    },
    {
      name: 'blue',
      colorKeys: ['#5CDBFF', '#0000FF'],
      ratios: {
        'large-text': 3,
        'text': 4.5
      }
    },
    {
      name: 'red',
      colorKeys: ['#FF9A81', '#FF0000'],
      ratios: {
        'large-text': 3,
        'text': 4.5
      }
    }
  ],
  baseScale: 'gray',
  brightness: 97
});

console.log('blah', exponentTheme);

module.exports = {
  
  // I *think* this returns something that looks like this:
  // [
  //   { background: '#f5f5f5' },
  //   { name: 'gray', values: [
  //     { 'low-contrast': '#somehex' },
  //     { 'large-text': '#somehex' },
  //     { 'text': '#somehex' },
  //     { 'high-contrast': '#somehex' },
  //   ]},
  //   { etc... }
  // ]

  exponentTheme
}
