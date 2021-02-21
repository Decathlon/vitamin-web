const sveltePreprocess = require('svelte-preprocess');

const preprocessOptions = {
  postcss: {
    plugins: [require('autoprefixer')()],
  },
};

module.exports = {
  preprocess: sveltePreprocess(preprocessOptions),

  // Export this to allow rollup.config.js to inherit the same preprocess options.
  preprocessOptions,
};
