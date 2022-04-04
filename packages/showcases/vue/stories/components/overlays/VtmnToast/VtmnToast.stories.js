import { VtmnToast } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/toast.csf';

export default {
  title: 'Components / Overlays / VtmnToast',
  component: VtmnToast,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnToast },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center"><VtmnToast v-bind="args"/></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
