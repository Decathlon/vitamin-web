import React from 'react';
import { VtmnQuantity } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/selection-controls/quantity.csf';

export default {
  title: 'Components / Selection controls / VtmnQuantity',
  component: VtmnQuantity,
  argTypes: argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnQuantity {...args} />;

export const Overview = Template.bind({});
