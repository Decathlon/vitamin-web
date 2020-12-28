const postCssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [postCssImport, tailwindcss, autoprefixer],
};
