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
    <div style={{ width: '800px', display: 'flex', justifyContent: 'center' }}>
      <VtmnTabs {...args} aria-label="Tabs list">
        {[1, 2, 3, 4].map((i) => {
          if (i < 3) {
            return (
              <VtmnTabsItem
                icon="heart-line"
                href="#"
                badgeValue={i * 20}
                selected={currentTab === i}
                onClick={() => setCurrentTab(i)}
              >
                Tab Item {i}
              </VtmnTabsItem>
            );
          }
          return (
            <VtmnTabsItem
              icon="heart-line"
              href="#"
              selected={currentTab === i}
              onClick={() => setCurrentTab(i)}
            >
              Tab Item {i}
            </VtmnTabsItem>
          );
        })}
      </VtmnTabs>
    </div>
  );
};

export const Overview = Template.bind({});
