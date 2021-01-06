// const postcss = require('postcss');
const postCssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    postCssImport,
    tailwindcss,
    autoprefixer,
    postcssCustomProperties({
      preserve: false,
    }),
  ],
};
