const postcssCoreConfig = require('./postcss-core.config');
const postcssCssVariables = require('postcss-css-variables');

module.exports = {
  plugins: [...postcssCoreConfig.plugins, postcssCssVariables],
};
