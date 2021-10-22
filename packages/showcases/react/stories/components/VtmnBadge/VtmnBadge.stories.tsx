import React from 'react';
import { VtmnBadge } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import { parameters } from '@vtmn/showcase-core/csf/components/VtmnBadge.csf';

export default {
  title: 'Components/VtmnBadge',
  component: VtmnBadge,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnBadge {...args} />;

export const Overview = Template.bind({});
