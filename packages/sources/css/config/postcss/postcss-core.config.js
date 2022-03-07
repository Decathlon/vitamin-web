const postcssImport = require('postcss-import');
const postcssColorMod = require('postcss-color-mod-function');
const autoprefixer = require('autoprefixer');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const postcssCombineMediaQuery = require('postcss-combine-media-query');
const postcssDiscardComments = require('postcss-discard-comments');
const postcssRem = require('postcss-rem');
const postcssCssVarToSassVar = require('postcss-css-var-to-sass-var');
const postcssCssVarToLessVar = require('postcss-css-var-to-less-var');
const postcssPrettify = require('postcss-prettify');
const postcssEncodeBackgroundSvgs = require('postcss-encode-background-svgs');

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
  postcssEncodeBackgroundSvgs,
];

if (process.env.SCSS_FORMAT === 'true') {
  plugins = [...plugins, postcssCssVarToSassVar];
}

if (process.env.LESS_FORMAT === 'true') {
  plugins = [...plugins, postcssCssVarToLessVar];
}

plugins = [...plugins, postcssPrettify];

module.exports = {
  plugins,
};
