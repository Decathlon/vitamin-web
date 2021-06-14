import { VtmnTextInput } from '@vtmn/react';

import { Meta, Story } from '@storybook/react';
import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export default {
  title: 'Components/VtmnTextInput',
  component: VtmnTextInput,
  argTypes: {
    id: {
      type: { name: 'string', required: true },
      description: 'The id of the input.',
      defaultValue: 'vtmn-input',
      control: { type: 'text' },
    },
    labelText: {
      type: { name: 'string', required: true },
      description: 'The label of the input.',
      defaultValue: 'Label',
      control: { type: 'text' },
    },
    placeholder: {
      type: { name: 'string', required: true },
      description: 'The placeholder of the input.',
      defaultValue: 'Placeholder Text',
      control: { type: 'text' },
    },
    helperText: {
      type: { name: 'string', required: false },
      description: 'The helper text message of the input.',
      defaultValue: 'Helper text goes here',
      control: { type: 'text' },
    },
    icon: {
      type: { name: 'string', required: false },
      description: 'The icon of text input.',
      defaultValue: 'home-fill',
      control: {
        type: 'select',
        options: ['', ...Object.keys(vitamixIconsList)],
      },
    },
    multiline: {
      type: { name: 'boolean', required: false },
      description: 'If the component is a textarea or an input.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the input.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    valid: {
      type: { name: 'boolean', required: false },
      description: 'The validity state of the input.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    error: {
      type: { name: 'boolean', required: false },
      description: 'The error state of the input.',
      defaultValue: false,
      control: { type: 'boolean' },
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
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=150%3A3410',
    },
  },
} as Meta;

const Template: Story = (args) => <VtmnTextInput {...args} />;

export const Overview = Template.bind({});
