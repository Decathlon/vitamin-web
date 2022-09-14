import React, { useState } from 'react';
import {
  VtmnTabs,
  VtmnTabsItem,
  VtmnTabsItems,
  VtmnTabsPanel,
  VtmnTabsPanels,
} from '@vtmn/react';
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
  const tabContent = [1, 2, 3, 4];

  return (
    <div style={{ width: '800px' }}>
      <VtmnTabs aria-label="Tabs list">
        <VtmnTabsItems {...args}>
          {tabContent.map((_, index) => {
            if (index < 2) {
              return (
                <VtmnTabsItem badgeValue={index * 20} icon="heart-line">
                  Tab Item {index + 1}
                </VtmnTabsItem>
              );
            }
            return (
              <VtmnTabsItem icon="heart-line">
                Tab Item {index + 1}
              </VtmnTabsItem>
            );
          })}
        </VtmnTabsItems>
        <VtmnTabsPanels>
          {tabContent.map((_, index) => {
            return (
              <VtmnTabsPanel>
                Tab Item {index + 1} <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                tenetur voluptatum asperiores quis eum perspiciatis repellat
                temporibus ab aperiam cumque deserunt eveniet dolore excepturi,
                error veniam quidem ipsum necessitatibus? Sequi?
              </VtmnTabsPanel>
            );
          })}
        </VtmnTabsPanels>
      </VtmnTabs>
    </div>
  );
};

export const Overview = Template.bind({});
