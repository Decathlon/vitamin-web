import { VtmnCheckbox } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnCheckbox.csf';

export default {
  title: 'Components/VtmnCheckbox',
  component: VtmnCheckbox,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnCheckbox {...args} />;

export const Overview = Template.bind({});
