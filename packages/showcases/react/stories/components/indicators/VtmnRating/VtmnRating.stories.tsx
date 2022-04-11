import React from 'react';
import { VtmnRating } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/rating.csf';

export default {
  title: 'Components / Indicators / VtmnRating',
  component: VtmnRating,
  argTypes: {
    ...argTypes,
    comment: {
      type: { name: 'number', required: false },
      description:
        'Comment displayed on the right side of the rating when using compact mode.',
      defaultValue: false,
      control: { type: 'number' },
    },

    onChange: {
      type: { name: 'string', required: false },
      description: 'Called when value has changed',
      control: {
        type: 'function',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnRating {...args} />;

export const Overview = Template.bind({});
