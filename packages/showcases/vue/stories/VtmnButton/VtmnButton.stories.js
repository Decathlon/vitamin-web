import { VtmnButton } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnButton.csf';

export default {
  title: 'Components/VtmnButton',
  component: VtmnButton,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnButton },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center"><VtmnButton v-bind="args">Button</VtmnButton></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
