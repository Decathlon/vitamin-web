import React from 'react';

import { VtmnIcon } from '@vtmn/react';
import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/VtmnIcon',
  component: VtmnIcon,
  argTypes: {
    size: {
      type: { name: 'number', required: false },
      description: 'The size of the icon in pixels.',
      defaultValue: 24,
      control: {
        type: 'select',
        options: [16, 24, 32, 64],
      },
    },
    color: {
      type: { name: 'string', required: false },
      description: 'The color of the icon.',
      defaultValue: 'black',
      control: {
        type: 'select',
        options: [
          'black',
          'brand-digital',
          'white',
          'success',
          'info',
          'warning',
          'danger',
        ],
      },
    },
    value: {
      type: { name: 'string', required: true },
      description: 'The value of the icon.',
      defaultValue: 'home-fill',
      control: {
        type: 'select',
        options: Object.keys(vitamixIconsList),
      },
    },
  },
  parameters: {
    backgrounds: { default: 'grey' },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=31%3A136',
    },
  },
} as Meta;

const Template: Story = (args) => <VtmnIcon {...args} />;

export const Overview = Template.bind({});
