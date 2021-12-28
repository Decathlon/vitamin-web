import { VtmnSelect } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnSelect.csf';

export default {
  title: 'Components/VtmnSelect',
  component: VtmnSelect,
  argTypes: {
    ...argTypes,
  },
  parameters,
} as Meta;

const Template: Story = (args) => <div>test</div>;

export const Overview = Template.bind({});
