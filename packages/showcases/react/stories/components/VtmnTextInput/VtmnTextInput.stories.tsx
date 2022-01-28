import { VtmnTextInput } from '@vtmn/react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/forms/text-input.csf';

export default {
  title: 'Components/VtmnTextInput',
  component: VtmnTextInput,
  argTypes: {
    ...argTypes,
    onIconClick: {
      type: { name: 'string', required: false },
      description: 'Called when icon is clicked',
      control: {
        type: 'function',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnTextInput {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  onIconClick: () => action('icon clicked'),
};
