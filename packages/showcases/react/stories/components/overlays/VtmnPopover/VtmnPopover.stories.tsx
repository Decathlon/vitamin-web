import React from 'react';
import { VtmnPopover, VtmnLink } from '@vtmn/react';
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
  <VtmnPopover identifier="my-popover" {...args}>
    <VtmnLink>Popover on the {args.position}</VtmnLink>
  </VtmnPopover>
);

export const Overview = Template.bind({});
