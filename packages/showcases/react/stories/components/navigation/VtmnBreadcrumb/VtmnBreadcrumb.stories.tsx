import React from 'react';
import { VtmnBreadcrumb, VtmnBreadcrumbItem } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/breadcrumb.csf';

export default {
  title: 'Components / Navigation / VtmnBreadcrumb',
  component: VtmnBreadcrumb,
  argTypes: argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => (
  <VtmnBreadcrumb {...args} aria-label="Breadcrumb">
    <VtmnBreadcrumbItem icon="home-line" href="#">
      Home
    </VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="store-line" href="#">
      Store
    </VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="gift-line" href="#">
      New
    </VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="user-line" href="#">
      Children
    </VtmnBreadcrumbItem>
    <VtmnBreadcrumbItem icon="t-shirt-line" aria-current="page">
      Tee-shirt
    </VtmnBreadcrumbItem>
  </VtmnBreadcrumb>
);

export const Overview = Template.bind({});
