import React from 'react';
import { VtmnTabs, VtmnTabsItem } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/tabs.csf';

export default {
  title: 'Components / Navigation / VtmnTabs',
  component: VtmnTabs,
  argTypes: argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
    <VtmnTabs {...args} aria-label="Tabs list">
      <VtmnTabsItem icon="heart-line" href="#">
        Tab Item 1
      </VtmnTabsItem>
      <VtmnTabsItem icon="heart-line" href="#">
        Tab Item 2
      </VtmnTabsItem>
      <VtmnTabsItem icon="heart-line" badgeValue="99" href="#">
        Tab Item 3
      </VtmnTabsItem>
      <VtmnTabsItem icon="heart-line" badgeValue="99" href="#">
        Tab Item 4
      </VtmnTabsItem>
    </VtmnTabs>
  </div>
);

export const Overview = Template.bind({});
