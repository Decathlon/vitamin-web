import { VtmnCheckbox } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/selection-controls/checkbox.csf';

export default {
  title: 'Components / Selection controls /VtmnCheckbox',
  component: VtmnCheckbox,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnCheckbox },
  setup() {
    return { args };
  },
  template: `<VtmnCheckbox v-bind="args"/>`,
});

export const Overview = Template.bind({});
Overview.args = {};
