module.exports = {
  stories: [
    '../src/stories/*.stories.(mdx|js)',
    '../src/stories/guidelines/**/*.stories.(mdx|js)',
    '../src/stories/components/**/*.stories.(mdx|js)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
  ],
};
