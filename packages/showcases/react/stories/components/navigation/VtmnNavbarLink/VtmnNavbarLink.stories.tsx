import React from 'react';
import { VtmnNavbarLink } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/navbar-link.csf';

export default {
  title: 'Components / Navigation / VtmnNavbarLink',
  component: VtmnNavbarLink,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => (
  <div
    style={{
      width: 800,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <VtmnNavbarLink
      label="Contact us"
      icon="question-line"
      href="#"
      {...args}
    ></VtmnNavbarLink>
  </div>
);

export const Overview = Template.bind({});
