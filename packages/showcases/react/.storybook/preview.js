import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds,viewport: {
    viewports,
  },
};
