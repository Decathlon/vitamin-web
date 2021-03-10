const postcssCoreBase10Config = require('./postcss-core-base10.config');
const postcssCssVariables = require('postcss-css-variables');

module.exports = {
  plugins: [...postcssCoreBase10Config.plugins, postcssCssVariables],
};
