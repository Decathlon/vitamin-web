const postcssImport = require('postcss-import');
const postcssColorMod = require('postcss-color-mod-function');
const autoprefixer = require('autoprefixer');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const postcssCombineMediaQuery = require('postcss-combine-duplicated-selectors');
const postcssDiscardComments = require('postcss-discard-comments');
const postcssRem = require('postcss-rem');
const postcssCssVarToSassVar = require('postcss-css-var-to-sass-var');
const postcssPrettify = require('postcss-prettify');

const postcssRemOptions =
  process.env.FONT_SIZE_BASE === '10' ? { baseline: 10 } : { baseline: 16 };

let plugins = [
  postcssImport,
  postcssColorMod,
  autoprefixer,
  postcssDiscardComments,
  postcssCombineMediaQuery,
  postcssCombineDuplicatedSelectors,
  postcssRem(postcssRemOptions),
];

if (process.env.SCSS_FORMAT === 'true') {
  plugins = [...plugins, postcssCssVarToSassVar];
}

plugins = [...plugins, postcssPrettify];

module.exports = {
  plugins,
};
