import VtmnLinkView from './VtmnLinkView.svelte';
import VtmnLink from '@vtmn/svelte/src/components/VtmnLink.svelte';
import VtmnLinkCsf from '../../../../core/src/components/VtmnLink.csf';

export default VtmnLinkCsf(VtmnLink);

const Template = (args) => ({
  Component: VtmnLinkView,
  props: args,
});

export const Overview = Template.bind({});
Overview.args = {};
