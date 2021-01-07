const postCssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssColorMod = require('postcss-color-mod-function');

module.exports = {
  plugins: [postCssImport, postcssColorMod, tailwindcss, autoprefixer],
};
