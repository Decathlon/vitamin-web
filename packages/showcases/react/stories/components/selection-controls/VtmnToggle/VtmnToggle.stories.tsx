import React, { useState } from 'react';
import { VtmnToggle } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/selection-controls/toggle.csf';

export default {
  title: 'Components / Selection controls / VtmnToggle',
  component: VtmnToggle,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <VtmnToggle
      onChange={() => setChecked(!checked)}
      checked={checked}
      {...args}
    />
  );
};

export const Overview = Template.bind({});
