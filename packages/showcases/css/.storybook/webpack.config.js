module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /\.runscript.js$/i,
    use: 'raw-loader',
  });

  // Return the altered config
  return config;
};
