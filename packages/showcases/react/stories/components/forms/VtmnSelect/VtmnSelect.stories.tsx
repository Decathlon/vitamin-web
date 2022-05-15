import { Meta, Story } from '@storybook/react';
import { VtmnSelect } from '@vtmn/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/forms/select.csf';
import React from 'react';

export default {
  title: 'Components / Forms / VtmnSelect',
  component: VtmnSelect,
  argTypes,
  parameters,
} as Meta;

const options = [
  <option value="" disabled selected>
    Select
  </option>,
  <option value="gymnastics">Gymnastics</option>,
  <option value="archery">Archery</option>,
  <option value="climbing">Climbing</option>,
  <option value="surf">Surf</option>,
  <option value="badminton">Badminton</option>,
  <option value="football">Football</option>,
];

const Template: Story = (args) => <VtmnSelect options={options} {...args} />;

export const Overview = Template.bind({});
