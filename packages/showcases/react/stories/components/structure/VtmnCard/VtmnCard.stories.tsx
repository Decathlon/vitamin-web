import React from 'react';
import { VtmnCard } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/structure/card.csf';

export default {
  title: 'Components / Structure / VtmnCard',
  component: VtmnCard,
  argTypes: {
    ...argTypes,
    mediaSource: {
      type: { name: 'string', required: true },
      description: 'The source of the media to render inside the card',
      defaultValue:
        'https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg',
      control: {
        type: 'text',
      },
    },
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
  <div style={{ width: 300, height: 200 }}>
    <VtmnCard
      {...args}
      img={
        <img
          src="https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg"
          alt="placeholder"
        />
      }
    />
  </div>
);

export const Overview = Template.bind({});
