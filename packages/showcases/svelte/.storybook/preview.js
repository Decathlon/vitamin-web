
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';
import DivDecorator from './DivDecorator.svelte';
import { addReadme } from 'storybook-readme/html';

import '@vtmn/icons/dist/vitamix/font/vitamix.css';

export const decorators = [() => DivDecorator, withDesign, addReadme];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds,
  controls: { expanded: true },
  options: {
    storySort: {
      order: ['Guidelines', 'Components'],
    },
  },
  viewport: {
    viewports,
  },
  readme: {
    codeTheme: 'a11y-dark'
  }
};
