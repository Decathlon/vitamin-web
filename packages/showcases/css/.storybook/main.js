module.exports = {
  stories: [
    '../stories/*.stories.(mdx|js)',
    '../stories/guidelines/**/*.stories.(mdx|js)',
    '../stories/components/**/*.stories.(mdx|js)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
};
