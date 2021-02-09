import React from 'react';

import { Button } from '@vtmn/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'primary-reversed',
          'secondary',
          'secondary-reversed',
          'ghost',
          'conversion',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'stretched'],
      },
    },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {};
