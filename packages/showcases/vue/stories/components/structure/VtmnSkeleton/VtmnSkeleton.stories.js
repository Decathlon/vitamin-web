import { VtmnSkeleton } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/structure/skeleton.csf';

export default {
  title: 'Components / Structure / VtmnSkeleton',
  component: VtmnSkeleton,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnSkeleton },
  setup() {
    return { args };
  },
  template: `<div class="vtmn-flex vtmn-shadow-200 vtmn-bg-background-primary vtmn-rounded-lg vtmn-p-4 vtmn-mb-5 vtmn-items-center vtmn-content-center" style="width:200px;"><VtmnSkeleton v-bind="args" /></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
