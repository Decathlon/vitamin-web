const { extendDefaultPlugins } = require('svgo');
module.exports = {
  plugins: extendDefaultPlugins([
    // {
    //   name: 'removeViewBox',
    //   active: false,
    // },
    {
      name: 'removeAttrs',
      params: {
        attrs: '*:(stroke|fill|color)',
      },
    },
    // {
    //   name: 'addAttributesToSVGElement',
    //   active: true,
    //   params: {
    //     attributes: [
    //       {
    //         viewBox: '0 0 24 24',
    //         width: '16',
    //         height: '16',
    //       },
    //     ],
    //   },
    // },
  ]),
};
