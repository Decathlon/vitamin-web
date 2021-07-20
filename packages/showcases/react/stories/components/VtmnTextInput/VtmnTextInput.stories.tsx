import { VtmnTextInput } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnTextInput.csf';

export default {
  title: 'Components/VtmnTextInput',
  component: VtmnTextInput,
  argTypes,
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnTextInput {...args} />;

export const Overview = Template.bind({});
