import React from 'react';
import { VtmnProgressbar } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/progressbar.csf';

export default {
  title: 'Components / Indicators / VtmnProgressbar',
  component: VtmnProgressbar,
  argTypes: argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => (
  <VtmnProgressbar aria-labelledby="progress-bar-text" {...args} />
);

export const Overview = Template.bind({});
