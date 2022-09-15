import React, { useState } from 'react';
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

const Template: Story = (args) => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <div style={{ width: '800px' }}>
      <VtmnTabs {...args} aria-label="Tabs list">
        {[1, 2, 3, 4].map((i) => {
          if (i < 3) {
            return (
              <VtmnTabsItem icon="heart-line" badgeValue={i * 20}>
                Tab Item {i}
              </VtmnTabsItem>
            );
          }
          return <VtmnTabsItem icon="heart-line">Tab Item {i}</VtmnTabsItem>;
        })}
      </VtmnTabs>
    </div>
  );
};

export const Overview = Template.bind({});
