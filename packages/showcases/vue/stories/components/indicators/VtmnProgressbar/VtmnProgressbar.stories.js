import { VtmnProgressbar } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/progressbar.csf';

export default {
  title: 'Components / Indicators / VtmnProgressbar',
  component: VtmnProgressbar,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnProgressbar },
  setup() {
    return { args };
  },
  template: `
  <div style="width: 300px; display:flex; justify-content: center;">
    <VtmnProgressbar v-bind="args" />
  </div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
