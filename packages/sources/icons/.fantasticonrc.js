module.exports = {
  inputDir: './dist/vitamix/svg', // (required)
  outputDir: './dist/vitamix/font', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  name: 'vitamix',
  prefix: 'vtmx',
  normalize: true,
  templates: {
    css: './src/templates/css.hbs'
  },
  formatOptions: {
    json: {
      indent: 2
    },
    ts: {
      types: ['constant', 'literalId'],
      singleQuotes: true
    }
  }
};
