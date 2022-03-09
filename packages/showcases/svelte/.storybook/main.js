module.exports = {
  stories: [
    '../stories/guidelines/**/*.stories.{js,jsx,ts,tsx,mdx,svelte}',
    '../stories/components/**/*.stories.{js,jsx,ts,tsx,mdx,svelte}'
  ],
  addons: [
    '@storybook/addon-svelte-csf',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    'storybook-addon-designs',
  ],
  features: {
    postcss: false,
  },
}
