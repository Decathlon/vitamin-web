import React from 'react';
import { VtmnDropdown } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/actions/dropdown.csf';

export default {
  title: 'Components / Actions / VtmnDropdown',
  component: VtmnDropdown,
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: 400, display: 'flex', justifyContent: 'center' }}>
    <VtmnDropdown {...args} />
  </div>
);

export const Overview = Template.bind({});
