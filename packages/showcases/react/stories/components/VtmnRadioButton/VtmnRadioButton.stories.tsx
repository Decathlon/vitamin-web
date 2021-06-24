import { VtmnRadioButton } from '@vtmn/react';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/VtmnRadioButton',
  component: VtmnRadioButton,
  argTypes: {
    identifier: {
      type: { name: 'string', required: true },
      description: 'The id of the radio.',
      defaultValue: 'vtmn-radio-button',
      control: { type: 'text' },
    },
    labelText: {
      type: { name: 'string', required: false },
      description: 'The label of the radio.',
      defaultValue: 'Your label',
      control: { type: 'text' },
    },
    name: {
      type: { name: 'string', required: false },
      description: 'The name of the radio.',
      defaultValue: null,
      control: { type: 'text' },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the radio.',
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
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit?node-id=359%3A30',
    },
  },
} as Meta;

const Template: Story = (args) => <VtmnRadioButton {...args} />;

export const Overview = Template.bind({});
