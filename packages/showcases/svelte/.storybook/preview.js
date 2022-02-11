
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';
import DivDecorator from './DivDecorator.svelte';
import '@vtmn/css';
import '@vtmn/icons/dist/vitamix/font/vitamix.css';

export const decorators = [() => DivDecorator, withDesign];

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
