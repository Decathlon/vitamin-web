import { VtmnLoader } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnLoader.csf';

export default {
  title: 'Components/VtmnLoader',
  component: VtmnLoader,
  argTypes: {
    ...argTypes,
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnLoader {...args} />;

export const Overview = Template.bind({});
