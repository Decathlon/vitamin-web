import { VtmnToggle } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnToggle.csf';

export default {
  title: 'Components/VtmnToggle',
  component: VtmnToggle,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnToggle },
  setup() {
    return { args };
  },
  template: '<VtmnToggle v-bind="args"/>',
});

export const Overview = Template.bind({});
Overview.args = {};
