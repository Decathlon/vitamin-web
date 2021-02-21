
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';

export const decorators = [withDesign];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds,
  viewport: {
    viewports,
  },
};
