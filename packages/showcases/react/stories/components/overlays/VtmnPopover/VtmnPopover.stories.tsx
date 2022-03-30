import React from 'react';
import { VtmnPopover } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/popover.csf';

export default {
  title: 'Components / Overlays / VtmnPopover',
  component: VtmnPopover,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: 400, height: 250, textAlign: 'center' }}>
    <VtmnPopover identifier="my-popover" {...args} />
  </div>
);

export const Overview = Template.bind({});
