const defaultConfig = require('@decathlon/vitamin-css-tailwind-config');

module.exports = Object.assign(defaultConfig, {
  purge: ['./src/button.css'],
});
