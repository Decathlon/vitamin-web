module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/guidelines/**/*.stories.mdx', '../stories/components/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@whitespace/storybook-addon-html', 'storybook-addon-designs'],
  features: {
    postcss: false
  },
  core: {
    builder: 'webpack5'
  }
};