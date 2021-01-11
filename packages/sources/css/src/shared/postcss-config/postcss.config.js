const postcssImport = require('postcss-import');
const postcssColorMod = require('postcss-color-mod-function');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssCssVariables = require('postcss-css-variables');
const postcssDiscardComments = require('postcss-discard-comments');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');

module.exports = {
  plugins: [
    postcssImport,
    postcssColorMod,
    tailwindcss,
    autoprefixer,
    postcssCssVariables,
    postcssDiscardComments,
    postcssCombineDuplicatedSelectors,
  ],
};
