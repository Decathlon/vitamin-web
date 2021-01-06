// const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssColorMod = require('postcss-color-mod-function');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssCssVariables = require('postcss-css-variables');
const postcssDiscardComments = require('postcss-discard-comments');

module.exports = {
  plugins: [
    postcssImport,
    postcssColorMod,
    tailwindcss,
    autoprefixer,
    postcssCssVariables,
    postcssCombineDuplicatedSelectors,
    postcssDiscardComments,
  ],
};
