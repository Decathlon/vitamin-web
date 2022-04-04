import { VtmnPopover, VtmnLink } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/popover.csf';

export default {
  title: 'Components / Overlays / VtmnPopover',
  component: VtmnPopover,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnPopover, VtmnLink },
  setup() {
    return { args };
  },
  template: `<VtmnPopover id="my-popover" v-bind="args"><VtmnLink>Popover on the {{ args.position }}</VtmnLink></VtmnPopover>`,
});

export const Overview = Template.bind({});
Overview.args = {};
