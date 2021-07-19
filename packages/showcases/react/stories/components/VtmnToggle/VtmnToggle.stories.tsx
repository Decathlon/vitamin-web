import { VtmnToggle } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnToggle.csf';

export default {
  title: 'Components/VtmnToggle',
  component: VtmnToggle,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnToggle {...args} />;

export const Overview = Template.bind({});
