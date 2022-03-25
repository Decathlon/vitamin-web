import { VtmnDivider } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/structure/divider.csf';

export default {
  title: 'Components / Structure /VtmnDivider',
  component: VtmnDivider,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnDivider },
  setup() {
    return { args };
  },
  template: `<VtmnDivider v-bind="args"/>`,
});

export const Overview = Template.bind({});
Overview.args = {};
