import '@vtmn/css';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';
import { defineCustomElements } from '@vtmn/web-components/dist/esm/loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds,
  viewport: {
    viewports,
  },
};
