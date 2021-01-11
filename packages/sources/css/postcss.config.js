const postCssImport = require('postcss-import');
const postcssColorMod = require('postcss-color-mod-function');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [postCssImport, postcssColorMod, tailwindcss, autoprefixer],
};
