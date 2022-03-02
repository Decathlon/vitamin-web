import { VtmnLoader } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/loader.csf';

export default {
  title: 'Components / Indicators / VtmnLoader',
  component: VtmnLoader,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnLoader },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center"><VtmnLoader v-bind="args" /></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
