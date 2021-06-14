import { VtmnToggle } from '@vtmn/react';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/VtmnToggle',
  component: VtmnToggle,
  argTypes: {
    id: {
      type: { name: 'string', required: true },
      description: 'The id of the toggle.',
      defaultValue: 'vtmn-toggle',
      control: { type: 'text' },
    },
    labelText: {
      type: { name: 'string', required: false },
      description: 'The label of the toggle.',
      defaultValue: 'Your label',
      control: { type: 'text' },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the toggle.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the toggle.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium'],
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
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=612%3A1192',
    },
  },
} as Meta;

const Template: Story = (args) => <VtmnToggle {...args} />;

export const Overview = Template.bind({});
