import React from 'react';
import { VtmnAccordion, VtmnButton } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/structure/accordion.csf';

export default {
  title: 'Components / Structure / VtmnAccordion',
  component: VtmnAccordion,
  argTypes: {
    ...argTypes,
    onOpen: {
      type: { name: 'function', required: false },
      description: 'Callback fired when the accordion is opening',
      action: 'onOpen',
    },
    onClose: {
      type: { name: 'function', required: false },
      description: 'Callback fired when the accordion is closing',
      action: 'onClose',
    },
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
} as Meta;

const OverviewTemplate: Story = (args) => (
  <div style={{ width: 400, height: 250 }}>
    <VtmnAccordion {...args} />
  </div>
);

const SimpleTemplate: Story = (args) => (
  <div style={{ width: 400, height: 250 }}>
    <VtmnAccordion {...args} summary="Item 1" open>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </VtmnAccordion>
    <VtmnAccordion {...args} summary="Item 2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </VtmnAccordion>
    <VtmnAccordion {...args} summary="Item 3" disabled>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </VtmnAccordion>
  </div>
);

const WithLeftIconsTemplate: Story = (args) => (
  <div style={{ width: 400, height: 250 }}>
    <VtmnAccordion {...args} summary="Item 1" withIconLeft open>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </VtmnAccordion>
    <VtmnAccordion {...args} summary="Item 2" withIconLeft>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </VtmnAccordion>
    <VtmnAccordion {...args} summary="Item 3" disabled withIconLeft>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </VtmnAccordion>
  </div>
);

const CustomContentTemplate: Story = (args) => (
  <div style={{ width: 400, height: 250 }}>
    <VtmnAccordion {...args} summary="Item 1" withIconLeft open>
      <VtmnButton variant="primary" size="small">
        Button 1
      </VtmnButton>
      <VtmnButton variant="primary" size="small">
        Button 2
      </VtmnButton>
      <VtmnButton variant="primary" size="small">
        Button 3
      </VtmnButton>
    </VtmnAccordion>
  </div>
);

export const Overview = OverviewTemplate.bind({});
export const Simple = SimpleTemplate.bind({});
export const WithLeftIcons = WithLeftIconsTemplate.bind({});
export const CustomContent = CustomContentTemplate.bind({});
