import React from 'react';
import { VtmnBadge, VtmnNavbarLink } from '@vtmn/react';
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
    <VtmnNavbarLink label="Cart" icon="shopping-cart-line" href="#" {...args}>
      <VtmnBadge value={3} variant="accent" />
    </VtmnNavbarLink>
  </div>
);

export const Overview = Template.bind({});
