import React from 'react';
import { VtmnIcon } from '@vtmn/react';
import { Story, Meta } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnIcon.csf';

export default {
  title: 'Components/VtmnIcon',
  component: VtmnIcon,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnIcon {...args} />;

export const Overview = Template.bind({});
