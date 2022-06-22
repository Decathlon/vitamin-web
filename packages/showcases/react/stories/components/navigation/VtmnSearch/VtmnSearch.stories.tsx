import React from 'react';
import { VtmnSearch } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/search.csf';

export default {
  title: 'Components / Navigation / VtmnSearch',
  component: VtmnSearch,
  argTypes: argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => {
  const onSearch = (search: string) => {
    console.log('search value is: ' + search);
  };

  return <VtmnSearch onSearch={onSearch} {...args} />;
};

export const Overview = Template.bind({});
