const postcssCoreConfig = require('./postcss-core.config');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [...postcssCoreConfig.plugins, tailwindcss],
};
