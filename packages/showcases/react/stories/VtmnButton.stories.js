import React from 'react';

import { VtmnButton } from '@vtmn/react';

export default {
  title: 'Components/VtmnButton',
  component: VtmnButton,
};

const Template = (args) => <VtmnButton {...args}>Button</VtmnButton>;

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
