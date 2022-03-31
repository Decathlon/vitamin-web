import { VtmnAlert } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/alert.csf';

export default {
  title: 'Components / Overlays / VtmnAlert',
  component: VtmnAlert,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnAlert },
  setup() {
    return { args };
  },
  template: `<VtmnAlert v-bind="args" />`,
});

export const Overview = Template.bind({});
Overview.args = {};
