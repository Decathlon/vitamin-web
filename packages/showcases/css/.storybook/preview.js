import '@decathlon/vitamin-css';
import { withDesign } from 'storybook-addon-designs';
import viewports from './addons/viewports.json';
import backgrounds from './addons/backgrounds.json';

export const decorators = [withDesign];

export const parameters = {
  viewport: {
    viewports,
  },
  backgrounds,
};
