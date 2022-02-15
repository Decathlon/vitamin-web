import React, { useState } from 'react';
import { VtmnRadioButton } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/selection-controls/radio-button.csf';

export default {
  title: 'Components / Selection controls / VtmnRadioButton',
  component: VtmnRadioButton,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <VtmnRadioButton
      onChange={() => setChecked(!checked)}
      checked={checked}
      {...args}
    />
  );
};

export const Overview = Template.bind({});
