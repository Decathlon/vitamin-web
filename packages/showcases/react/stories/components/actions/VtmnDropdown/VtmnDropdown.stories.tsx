import React from 'react';
import { VtmnDropdown, VtmnDropdownItem } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/actions/dropdown.csf';

export default {
  title: 'Components / Actions / VtmnDropdown',
  component: VtmnDropdown,
  argTypes: {
    ...argTypes,
    onChange: {
      type: { name: 'string', required: false },
      description: 'Called when item has changed',
      control: {
        type: 'function',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => {
  return (
    <div style={{ width: 400, display: 'flex', justifyContent: 'center' }}>
      <VtmnDropdown {...args}>
        <VtmnDropdownItem
          id="dropdown-0-opt-1"
          name="dropdown-0"
          value="item 1"
          endText="End Text"
        >
          Dropdown Item 1
        </VtmnDropdownItem>
        <VtmnDropdownItem
          id="dropdown-0-opt-2"
          name="dropdown-0"
          value="item 2"
          icon="user-line"
          endText="End Text"
        >
          Dropdown Item 2
        </VtmnDropdownItem>
        <VtmnDropdownItem
          id="dropdown-0-opt-3"
          name="dropdown-0"
          value="item 3"
          divider="true"
        >
          Dropdown Item 3
        </VtmnDropdownItem>
        <VtmnDropdownItem
          id="dropdown-0-opt-4"
          name="dropdown-0"
          value="item 4"
        >
          Dropdown Item 4
        </VtmnDropdownItem>
      </VtmnDropdown>
    </div>
  );
};

export const Overview = Template.bind({});
