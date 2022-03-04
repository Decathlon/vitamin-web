module.exports = {
  stories: [
    '../stories/guidelines/**/*.stories.{js,jsx,ts,tsx,mdx,svelte}',
    '../stories/components/**/*.stories.{js,jsx,ts,tsx,mdx,svelte}'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html',
    'storybook-addon-designs',
  ],
  features: {
    postcss: false,
  },
}
