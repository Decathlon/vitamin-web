const postcssImport = require('postcss-import');
const postcssColorMod = require('postcss-color-mod-function');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const postcssDiscardComments = require('postcss-discard-comments');
const postcssRem = require('postcss-rem');

module.exports = {
  plugins: [
    postcssImport,
    postcssColorMod,
    tailwindcss,
    autoprefixer,
    postcssRem,
    postcssCombineDuplicatedSelectors,
    postcssDiscardComments,
  ],
};
