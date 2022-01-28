module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '*:(stroke|fill|color)',
      },
    },
  ],
};
