import '@vtmn/css';
import '@vtmn/icons/dist/vitamix/font/vitamix.css';
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';
import '@vtmn/web-components/dist/vtmn-web-components/vtmn-web-components.css';
import { defineCustomElements } from '@vtmn/web-components/dist/esm/loader';

defineCustomElements();

export const decorators = [withDesign];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds,
  viewport: {
    viewports,
  },
};
