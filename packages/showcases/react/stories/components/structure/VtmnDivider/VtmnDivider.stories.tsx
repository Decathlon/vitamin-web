import React from 'react';
import { VtmnDivider } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/structure/divider.csf';

export default {
  title: 'Components / Structure / VtmnDivider',
  component: VtmnDivider,
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Label',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: 400, height: 250 }}>
    <VtmnDivider aria-labelledby="title-example" {...args} />
  </div>
);

export const Overview = Template.bind({});
