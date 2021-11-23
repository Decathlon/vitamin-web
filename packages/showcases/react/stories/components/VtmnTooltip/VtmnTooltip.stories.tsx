import React from 'react';
import { VtmnTooltip } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnTooltip.csf';

export default {
  title: 'Components/VtmnTooltip',
  component: VtmnTooltip,
  argTypes: { ...argTypes },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnTooltip {...args} />;

export const TooltipText = Template.bind({});
TooltipText.args = {
  tooltip: 'I am a tooltip example',
  children: 'Tooltip Example',
  position: 'right',
};
