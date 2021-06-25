import VtmnLinkView from './VtmnLinkView.svelte';
import VtmnLink from '@vtmn/svelte/src/components/VtmnLink.svelte';
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
};

const Template = (args) => ({
  Component: VtmnLinkView,
  props: args,
});

export const Overview = Template.bind({});
Overview.args = {};
