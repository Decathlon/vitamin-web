import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import vtmnIconsLogo from '@vtmn/showcase-core/images/vtmn-icons-logo.png';

addons.setConfig({
  panelPosition: 'right',
  theme: {
    ...themes.normal,
    brandTitle: '@vtmn/icons',
    brandUrl: 'https://github.com/Decathlon/vitamin-web',
    brandImage: vtmnIconsLogo,

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
