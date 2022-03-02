import '@vtmn/css';
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';

export const decorators = [withDesign];

export const parameters = {
  viewport: {
    viewports,
  },
  backgrounds
};
