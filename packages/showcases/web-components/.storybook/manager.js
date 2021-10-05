import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import vtmnWebComponentsLogo from '@vtmn/showcase-core/images/vtmn-web-components-logo.png';

addons.setConfig({
  panelPosition: 'bottom',
  theme: {
    ...themes.normal,
    brandTitle: '@vtmn/web-components',
    brandUrl: 'https://github.com/Decathlon/vitamin-web',
    brandImage: vtmnWebComponentsLogo,

    colorPrimary: '#007dbc',
    colorSecondary: '#4e5d6b',

    // UI
    appBg: 'white',
    appContentBg: '#eff1f3',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Roboto", Arial, Helvetica, sans-serif',
    fontCode: 'monospace',
  },
});
