import React from 'react';

import { VtmnButton } from '@vtmn/react';
import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/VtmnButton',
  component: VtmnButton,
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant of the button.',
      defaultValue: 'primary',
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
      type: { name: 'string', required: false },
      description: 'The size of the button.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'stretched'],
      },
    },
    icon: {
      type: { name: 'string', required: true },
      description: 'The value of the icon.',
      defaultValue: 'home-fill',
      control: {
        type: 'select',
        options: Object.keys(vitamixIconsList),
      },
    },
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component',
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    backgrounds: { default: 'grey' },
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=31%3A136',
    },
  },
} as Meta;

const Template: Story = (args) => <VtmnButton {...args} />;

export const Overview = Template.bind({});
