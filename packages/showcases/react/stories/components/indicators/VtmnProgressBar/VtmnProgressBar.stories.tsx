import React from 'react';
import { VtmnProgressBar } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/progressbar.csf';

export default {
  title: 'Components / Indicators / VtmnProgressBar',
  component: VtmnProgressBar,
  argTypes: argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnProgressBar {...args} />;

export const Overview = Template.bind({});
