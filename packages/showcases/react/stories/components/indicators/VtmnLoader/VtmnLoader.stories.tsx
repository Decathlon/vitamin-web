import React from 'react';
import { VtmnLoader } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/loader.csf';

export default {
  title: 'Components / Indicators / VtmnLoader',
  component: VtmnLoader,
  argTypes: {
    ...argTypes,
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnLoader {...args} />;

export const Overview = Template.bind({});
