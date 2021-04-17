import { VtmnLink } from '@vtmn/react';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/VtmnLink',
  component: VtmnLink,
  argTypes: {
    href: {
      type: { name: 'string', required: true },
      description: 'The href of the link.',
      defaultValue: '#',
      control: { type: 'text' },
    },
    target: {
      type: { name: 'string', required: true },
      description: 'The target of the link.',
      defaultValue: '_blank',
      control: { type: 'text' },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the link.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    isStandalone: {
      type: { name: 'boolean', required: false },
      description: 'If the component is a standalone or not.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Link',
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
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=1207%3A8898',
    },
  },
} as Meta;

const Template: Story = (args) => <VtmnLink {...args} />;

export const Overview = Template.bind({});
