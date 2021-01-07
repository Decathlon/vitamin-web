module.exports = {
  stories: [
    '../stories/*.stories.(mdx|js)',
    '../stories/guidelines/**/*.stories.(mdx|js)',
    '../stories/components/**/*.stories.(mdx|js)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
