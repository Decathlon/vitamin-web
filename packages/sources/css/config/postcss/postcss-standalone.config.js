const postcssCoreConfig = require('./postcss-core.config');
const postcssCssVariables = require('postcss-css-variables');
const postcssRemoveRoot = require('postcss-remove-root');

let postcssStandalonePlugins = [];

process.env.KEEP_VARS !== 'true' &&
  postcssStandalonePlugins.push(postcssCssVariables);

postcssStandalonePlugins.push(postcssRemoveRoot);

module.exports = {
  plugins: [...postcssCoreConfig.plugins, ...postcssStandalonePlugins],
};
