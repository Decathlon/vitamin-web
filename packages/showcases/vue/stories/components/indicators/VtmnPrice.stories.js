import { VtmnPrice } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/price.csf';

export default {
  title: 'Components / Indicators / VtmnPrice',
  component: VtmnPrice,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnPrice },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center"><VtmnPrice v-bind="args">250,00€</VtmnPrice></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
