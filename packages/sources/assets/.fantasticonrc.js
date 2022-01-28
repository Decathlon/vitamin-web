module.exports = {
  inputDir: './src', // (required)
  outputDir: './dist/assets/font', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  name: 'assets',
  prefix: 'vtmn-asset',
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
