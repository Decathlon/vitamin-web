module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    'storybook-addon-designs',
    'storybook-mobile',
    'storybook-addon-outline',
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      loader: require.resolve('@open-wc/webpack-import-meta-loader'),
    });
    return config;
  },
};
