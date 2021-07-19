import VtmnButtonView from './VtmnButtonView.svelte';
import VtmnButton from '@vtmn/svelte/src/components/VtmnButton.svelte';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnButton.csf';

export default {
  title: 'Components/VtmnButton',
  component: VtmnButton,
  argTypes: {
    ...argTypes,
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component',
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
};

const Template = (args) => ({
  Component: VtmnButtonView,
  props: args,
});

export const Overview = Template.bind({});
Overview.args = {};
