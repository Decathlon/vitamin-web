import React from 'react';
import { VtmnButton } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnDivider.csf';

export default {
  title: 'Components/VtmnDivider',
  component: VtmnDivider,
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component',
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnDivider {...args} />;

export const Overview = Template.bind({});
