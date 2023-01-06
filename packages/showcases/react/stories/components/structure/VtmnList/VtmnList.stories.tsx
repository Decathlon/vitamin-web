import React from 'react';
import { Meta, Story } from '@storybook/react';
import { parameters } from '@vtmn/showcase-core/csf/components/structure/list.csf';

import {
  VtmnList,
  VtmnListItem,
  VtmnListItemEndAction,
  VtmnListItemStartVisual,
  VtmnListItemText,
  VtmnListItemLink,
} from '@vtmn/react';
import { VtmnIcon } from '@vtmn/react';
import { VtmnButton } from '@vtmn/react';

export default {
  title: 'Components / Structure / VtmnList',
  component: VtmnList,
  argTypes: {
    divider: {
      type: { name: 'boolean', required: false },
      description: 'Disabled state of the divider',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the item',
      defaultValue: false,
      control: {
        type: 'boolean',
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

const OverviewTemplate: Story = (args) => (
  <div style={{ width: '500px' }}>
    <VtmnList {...args}>
      {[...Array(3)].map((_, i) => (
        <VtmnListItem key={i}>
          <VtmnListItemText
            onClick={() => console.log(`List item ${i} clicked`)}
          >
            <span>Lorem Ipsum</span>
            <span>Lorem ipsum dolor sit amet</span>
          </VtmnListItemText>
        </VtmnListItem>
      ))}
    </VtmnList>
  </div>
);

export const Overview = OverviewTemplate.bind({});

const VisualsActionsTemplate: Story = (args) => (
  <div style={{ width: '500px' }}>
    <VtmnList {...args}>
      {[...Array(3)].map((_, i) => (
        <VtmnListItem key={i}>
          <VtmnListItemStartVisual>
            <VtmnIcon value={'user-line'} />
          </VtmnListItemStartVisual>

          <VtmnListItemText>
            <span>Lorem Ipsum</span>
            <span>Lorem ipsum dolor sit amet</span>
          </VtmnListItemText>

          <VtmnListItemEndAction>
            <VtmnButton
              variant="primary"
              onClick={() => console.log(`Button of item ${i} clicked`)}
            >
              Button
            </VtmnButton>
          </VtmnListItemEndAction>
        </VtmnListItem>
      ))}
    </VtmnList>
  </div>
);

export const VisualsActions = VisualsActionsTemplate.bind({});

const SmallSizeTemplate: Story = (args) => (
  <div style={{ width: '500px' }}>
    <VtmnList {...args}>
      {[...Array(3)].map((_, i) => (
        <VtmnListItem key={i} size="small">
          <VtmnListItemText>
            <span>Lorem Ipsum</span>
            <span>Lorem ipsum dolor sit amet</span>
          </VtmnListItemText>
        </VtmnListItem>
      ))}
    </VtmnList>
  </div>
);

export const SmallSize = SmallSizeTemplate.bind({});

const WithLinkListTemplate: Story = (args) => (
  <div style={{ width: '500px' }}>
    <VtmnList {...args}>
      {[...Array(3)].map((_, i) => (
        <VtmnListItem
          key={i}
          size="small"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VtmnListItemText>
            <span>Lorem Ipsum</span>
            <span>Lorem ipsum dolor sit amet</span>
          </VtmnListItemText>
        </VtmnListItem>
      ))}
    </VtmnList>
  </div>
);

export const WithLinkList = WithLinkListTemplate.bind({});
