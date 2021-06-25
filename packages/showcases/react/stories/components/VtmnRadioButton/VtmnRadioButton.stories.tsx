import { VtmnRadioButton } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnRadioButton.csf';

export default {
  title: 'Components/VtmnRadioButton',
  component: VtmnRadioButton,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnRadioButton {...args} />;

export const Overview = Template.bind({});
