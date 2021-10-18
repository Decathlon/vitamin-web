import '@vtmn/icons/dist/vitamix/font/vitamix.css';
import '@vtmn/web-components/dist/style.css';
import '@vtmn/web-components/dist/web-components.es.js';
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';

export const decorators = [withDesign];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds,
  controls: { expanded: true },
  viewport: {
    viewports,
  },
};
