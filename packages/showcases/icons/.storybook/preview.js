import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';
import '@vtmn/icons/dist/vitamix/font/vitamix.css';

export const decorators = [withDesign];

export const parameters = {
  viewport: {
    viewports,
  },
  backgrounds
};
