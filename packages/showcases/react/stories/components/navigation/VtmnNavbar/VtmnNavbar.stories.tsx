import React from 'react';
import { VtmnNavbar } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/navbar.csf';

export default {
  title: 'Components / Navigation / VtmnNavbar',
  component: VtmnNavbar,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: 800, display: 'flex', justifyContent: 'center' }}>
    <VtmnNavbar {...args}></VtmnNavbar>
  </div>
);

export const Overview = Template.bind({});
