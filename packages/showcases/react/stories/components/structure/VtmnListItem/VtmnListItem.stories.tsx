import React from 'react';
import { Meta, Story } from '@storybook/react';
import { parameters } from '@vtmn/showcase-core/csf/components/structure/list.csf';
import { VtmnList, VtmnListItem, VtmnListItemText } from '@vtmn/react';

export default {
  title: 'Components / Structure / VtmnListItem',
  component: VtmnListItem,
  argTypes: {
    divider: {
      type: { name: 'boolean', required: false },
      description: 'Whether to show the divider under the item',
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
    size: {
      type: { name: 'string', required: false },
      description: 'Size of the item.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    href: {
      type: { name: 'string', required: false },
      description: 'Redirection link.',
      control: {
        type: 'text',
      },
    },
    target: {
      type: { name: 'string', required: false },
      description: 'Target of the link.',
      control: {
        type: 'text',
      },
      if: { arg: 'href' },
    },
    rel: {
      type: { name: 'string', required: false },
      description: 'Rel of the link.',
      control: {
        type: 'text',
      },
      if: { arg: 'href' },
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
    <VtmnList>
      <VtmnListItem {...args}>
        <VtmnListItemText onClick={() => console.log(`List item clicked`)}>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum dolor sit amet</span>
        </VtmnListItemText>
      </VtmnListItem>
    </VtmnList>
  </div>
);

export const Overview = OverviewTemplate.bind({});
