import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';

export default {
  title: 'Components/Button',
  component: 'vtmn-button',
};

const Template = (args) =>
  html`<vtmn-button ...=${spread(args)}>Button</vtmn-button>`;

export const Default = Template.bind({});
Default.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['primary', 'secondary', 'ghost', 'conversion'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large', 'stretched'],
    },
  },
};
Default.args = {};

export const Reversed = Template.bind({});
Reversed.parameters = {
  backgrounds: { default: 'blue' },
};
Reversed.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['primary-reversed', 'secondary-reversed'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large', 'stretched'],
    },
  },
};
Reversed.args = {
  variant: 'primary-reversed',
};
