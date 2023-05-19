import { VtmnTextInput } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/forms/text-input.csf';

export default {
  title: 'Components / Forms / VtmnTextInput',
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

const LabelComponent = (args) => ({
  components: { VtmnTextInput },
  setup() {
    return { args };
  },
  template: `<VtmnTextInput v-bind="args"><template #labelComponent><p>Label <i>(Optionnal)</i></p></template></VtmnTextInput>`,
});

export const Overview = Template.bind({});
Overview.args = {};
export const WithCustomLabel = LabelComponent.bind({});
