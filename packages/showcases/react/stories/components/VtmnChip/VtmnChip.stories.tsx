import React from 'react';
import { VtmnChip } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnChip.csf';

export default {
  title: 'Components/VtmnChip',
  component: VtmnChip,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnChip {...args} />;

export const Overview = Template.bind({});
