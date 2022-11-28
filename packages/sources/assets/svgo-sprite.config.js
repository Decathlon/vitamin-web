const xast = require('svgo/lib/xast.js');

module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '(clip-path|mask|filter)',
      },
    },
    {
      name: 'removeBuggedTags',
      description: '',
      fn: () => {
        return {
          element: {
            enter: (node, parentNode) => {
              const nodesToRemove = ['defs', 'mask'];
              if (nodesToRemove.includes(node.name)) {
                xast.detachNodeFromParent(node, parentNode);
              }
            },
          },
        };
      },
    },
  ],
};
