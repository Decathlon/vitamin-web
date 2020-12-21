module.exports = {
  stories: [
    '../src/stories/*.stories.mdx',
    '../src/stories/guidelines/**/*.stories.mdx',
    '../src/stories/components/**/*.stories.js',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
  ],
};
