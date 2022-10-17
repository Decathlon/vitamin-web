import '@vtmn/icons/dist/vitamix/font/vitamix.css';
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';

export const decorators = [() => ({ template: '<div><story/></div>' }), withDesign];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds,
  controls: { expanded: true },
  viewport: {
    viewports,
  },
  options: {
    storySort: {
      order: ['Guidelines', 'Components'],
    },
  },
};
