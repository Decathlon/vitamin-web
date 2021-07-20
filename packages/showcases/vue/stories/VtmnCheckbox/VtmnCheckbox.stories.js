import { VtmnCheckbox } from '@vtmn/vue/dist/esm/VtmnCheckbox';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnCheckbox.csf';

export default {
  title: 'Components/VtmnCheckbox',
  component: VtmnCheckbox,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnCheckbox },
  setup() {
    return { args };
  },
  template: '<VtmnCheckbox v-bind="args"/>',
});

export const Overview = Template.bind({});
Overview.args = {};
