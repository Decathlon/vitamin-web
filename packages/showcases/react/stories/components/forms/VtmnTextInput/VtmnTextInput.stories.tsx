import React from 'react';
import { VtmnTextInput } from '@vtmn/react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/forms/text-input.csf';

export default {
  title: 'Components / Forms / VtmnTextInput',
  component: VtmnTextInput,
  argTypes: {
    ...argTypes,
    onIconClick: {
      type: { name: 'string', required: false },
      description: 'Called when icon is clicked',
      control: {
        type: 'function',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnTextInput {...args} />;

const LabelComponent: Story = (args) => (
  <VtmnTextInput
    identifier="comp"
    labelComponent={
      <p>
        Label <i>(Optionnal)</i>
      </p>
    }
    {...args}
  />
);

export const Overview = Template.bind({});
Overview.args = {
  onIconClick: () => action('icon clicked'),
};

export const WithCustomLabel = LabelComponent.bind({});
