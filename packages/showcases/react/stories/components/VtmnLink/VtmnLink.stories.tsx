import { VtmnLink } from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnLink.csf';

export default {
  title: 'Components/VtmnLink',
  component: VtmnLink,
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component.',
      defaultValue: 'Link',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnLink {...args} />;

export const Overview = Template.bind({});
