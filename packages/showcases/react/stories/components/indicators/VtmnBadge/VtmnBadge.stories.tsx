import React from 'react';
import { VtmnBadge } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/badge.csf';

export default {
  title: 'Components / Indicators / VtmnBadge',
  component: VtmnBadge,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnBadge {...args} />;

export const Overview = Template.bind({});
