module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '*:(stroke|fill|color)',
      },
    },
    {
      name: 'removeDimensions',
      active: true,
    },
  ],
};
