import React from 'react';
import { VtmnSkeleton } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/structure/skeleton.csf';

export default {
  title: 'Components / Structure / VtmnSkeleton',
  component: VtmnSkeleton,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => (
  <div
    className="vtmn-flex vtmn-shadow-200 vtmn-bg-background-primary vtmn-rounded-lg vtmn-p-4 vtmn-mb-5 vtmn-items-center vtmn-content-center"
    style={{ width: 200 }}
  >
    <VtmnSkeleton {...args} />
  </div>
);

export const Overview = Template.bind({});
