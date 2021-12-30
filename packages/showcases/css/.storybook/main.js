module.exports = {
  stories: [
    '../stories/*.stories.@(mdx|js)',
    '../stories/guidelines/**/*.stories.@(mdx|js)',
    '../stories/components/**/*.stories.@(mdx|js)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    'storybook-addon-designs',
    'storybook-mobile',
    'storybook-design-token',
  ],
  webpackFinal: (config) => {
    config.module.rules = [
      // remove the old html-loader, with default value to true for minimize parameter
      ...config.module.rules.filter(({ test }) => test.toString() !== /\.html$/.toString()),
      // add new html-loader with right configuration
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false
        }
      }
    ];
    return config;
  },
};
