import VtmnTextInputView from './VtmnTextInputView.svelte';
import VtmnTextInput from '@vtmn/svelte/src/components/VtmnTextInput.svelte';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnTextInput.csf';

export default {
  title: 'Components/VtmnTextInput',
  component: VtmnTextInput,
  argTypes,
  parameters,
};

const Template = (args) => ({
  Component: VtmnTextInputView,
  props: args,
});

export const Overview = Template.bind({});
Overview.args = {};
