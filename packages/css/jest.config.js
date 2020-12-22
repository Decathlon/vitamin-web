module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
  },
};
