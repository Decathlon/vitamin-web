const defaultConfig = require('@vitamin-shared/cfg-tailwind');

module.exports = Object.assign(
  defaultConfig,
  {
    purge: ['./src/button.css'],
  },
);
