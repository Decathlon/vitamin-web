import React from 'react';

import { VtmnButton, VtmnButtonProps } from '@vtmn/react';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/VtmnButton',
  component: VtmnButton,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      type: { name: 'string', required: false },
      description: 'The variant of the button.',
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
      defaultValue: 'medium',
      type: { name: 'string', required: false },
      description: 'The size of the button.',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'stretched'],
      },
    },
    children: {
      description: 'The content to render inside the component',
      type: { name: 'string', required: false },
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

const Template: Story<VtmnButtonProps> = (args) => <VtmnButton {...args} />;

export const Default = Template.bind({});
