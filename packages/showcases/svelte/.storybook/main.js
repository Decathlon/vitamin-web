module.exports = {
  stories: [
    '../stories/**/*.stories.{js,jsx,ts,tsx,mdx,svelte}'
  ],
  addons: [
    '@storybook/addon-svelte-csf',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    'storybook-addon-designs',
    'storybook-mobile'
  ],
  features: {
    postcss: false,
  },
}
