import { VtmnSelect } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/forms/select.csf';

export default {
  title: 'Components/VtmnSelect',
  component: VtmnSelect,
  argTypes: {
    ...argTypes,
  },
  parameters,
} as Meta;

const options = [
  <option>option</option>,
  <option>option 2</option>,
  <option>option 3</option>,
];

const Template: Story = (args) => <VtmnSelect options={options} {...args} />;

export const Overview = Template.bind({});
