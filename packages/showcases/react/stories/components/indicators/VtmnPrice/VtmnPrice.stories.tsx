import React from 'react';
import { VtmnPrice } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/price.csf';

export default {
  title: 'Components / Indicators / VtmnPrice',
  component: VtmnPrice,
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: '250,00€',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnPrice {...args} />;

export const Overview = Template.bind({});
