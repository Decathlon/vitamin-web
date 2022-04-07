import { VtmnSearch } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/search.csf';

export default {
  title: 'Components / Navigation / VtmnSearch',
  component: VtmnSearch,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnSearch },
  setup() {
    return { args };
  },
  template: `<VtmnSearch v-bind="args"/>`,
});

export const Overview = Template.bind({});
Overview.args = {};
