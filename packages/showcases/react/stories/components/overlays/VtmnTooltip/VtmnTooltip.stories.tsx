import React from 'react';
import { VtmnTooltip } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/tooltip.csf';

export default {
  title: 'Components / Overlays / VtmnTooltip',
  component: VtmnTooltip,
  argTypes: { ...argTypes },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnTooltip {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  children: 'Tooltip',
};
