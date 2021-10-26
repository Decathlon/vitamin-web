import { VtmnTextInput } from '@vtmn/vue';
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
  components: { VtmnTextInput },
  setup() {
    return { args };
  },
  template: `<VtmnTextInput v-bind="args"/>`,
});

export const Overview = Template.bind({});
Overview.args = {};
