import React from 'react';
import { VtmnTag } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/tag.csf';

export default {
  title: 'Components / Indicators / VtmnTag',
  component: VtmnTag,
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Tag',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnTag {...args} />;

export const Overview = Template.bind({});
