import { VtmnRadioButton } from '@vtmn/vue/dist/esm/VtmnRadioButton';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnRadioButton.csf';

export default {
  title: 'Components/VtmnRadioButton',
  component: VtmnRadioButton,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnRadioButton },
  setup() {
    return { args };
  },
  template: '<VtmnRadioButton v-bind="args"/>',
});

export const Overview = Template.bind({});
Overview.args = {};
