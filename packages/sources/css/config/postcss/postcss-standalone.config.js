const postcssImport = require('postcss-import');
const postcssColorMod = require('postcss-color-mod-function');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssCssVariables = require('postcss-css-variables');
const postcssDiscardComments = require('postcss-discard-comments');
const postcssCombineMediaQuery = require('postcss-combine-media-query');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const postcssRem = require('postcss-rem');

module.exports = {
  plugins: [
    postcssImport,
    postcssColorMod,
    tailwindcss,
    autoprefixer,
    postcssRem,
    postcssCssVariables,
    postcssDiscardComments,
    postcssCombineMediaQuery,
    postcssCombineDuplicatedSelectors,
  ],
};
