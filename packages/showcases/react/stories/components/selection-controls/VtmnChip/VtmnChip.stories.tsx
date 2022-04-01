import React from 'react';
import { VtmnChip } from '@vtmn/react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/selection-controls/chip.csf';

export default {
  title: 'Components / Selection controls / VtmnChip',
  component: VtmnChip,
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Chip',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnChip {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  onClick: () => action('Chip clicked'),
  onCancel: () => action('Filter canceled'),
};
