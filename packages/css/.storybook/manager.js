import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.normal,
    brandTitle: '@decathlon/vitamin-css',
    brandUrl: 'https://github.com/Decathlon/vitamin-web',
  },
});
