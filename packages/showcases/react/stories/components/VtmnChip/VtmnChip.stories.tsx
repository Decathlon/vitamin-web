import React from 'react';
import { VtmnChip, VtmnButton } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnChip.csf';

export default {
  title: 'Components/VtmnChip',
  component: VtmnChip,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => (
  <div className="vtmn-flex vtmn-flex-col vtmn-space-y-4 vtmn-items-center vtmn-typo_text-2">
    <VtmnChip tabIndex={0} {...args} />
    <VtmnChip
      tabIndex={0}
      {...args}
      icon={'image-line'}
      className="vtmn-chip_variant--input vtmn-chip--selected"
    >
      {args.children}
      <VtmnButton
        iconAlone={'close-line'}
        size="small"
        variant="ghost-reversed"
      />
    </VtmnChip>
  </div>
);
export const Overview = Template.bind({});
