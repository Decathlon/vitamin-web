import '@decathlon/vitamin-css';
import { withDesign } from 'storybook-addon-designs';
import viewports from './config/viewports.json';
import backgrounds from './config/backgrounds.json';

export const decorators = [withDesign];

export const parameters = {
  viewport: {
    viewports,
  },
  backgrounds,
};
