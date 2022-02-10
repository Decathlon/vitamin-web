import { VtmnToggle } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/selection-controls/toggle.csf';

export default {
  title: 'Components / Selection controls /VtmnToggle',
  component: VtmnToggle,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnToggle },
  setup() {
    return { args };
  },
  template: `<VtmnToggle v-bind="args"/>`,
});

export const Overview = Template.bind({});
Overview.args = {};
