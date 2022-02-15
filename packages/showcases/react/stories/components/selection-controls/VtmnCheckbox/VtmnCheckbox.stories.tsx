import React, { useState } from 'react';
import { VtmnCheckbox } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/selection-controls/checkbox.csf';

export default {
  title: 'Components / Selection controls / VtmnCheckbox',
  component: VtmnCheckbox,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <VtmnCheckbox
      onChange={() => setChecked(!checked)}
      checked={checked}
      {...args}
    />
  );
};

export const Overview = Template.bind({});
