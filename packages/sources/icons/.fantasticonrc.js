module.exports = {
  inputDir: './src/vitamix', // (required)
  outputDir: './dist/vitamix/font', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  name: 'vitamix',
  prefix: 'vtmx',
  selector: '.vtmx',
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
