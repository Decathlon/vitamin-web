import { VtmnList, VtmnListItem } from '@vtmn/vue';
import { parameters } from '@vtmn/showcase-core/csf/components/structure/list.csf';

export default {
  title: 'Components / Structure / VtmnList',
  component: VtmnList,
  parameters,
};

const Template = (args) => ({
  components: { VtmnList, VtmnListItem },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center">
    <VtmnList v-bind="args">
      <VtmnListItem>
        <template v-slot:text><span>Lorem ipsum</span></template>
        <template v-slot:subtext><span>Lorem ipsum dolor sit amet</span></template>
      </VtmnListItem>
      <VtmnListItem>
        <template v-slot:text><span>Lorem ipsum</span></template>
        <template v-slot:subtext><span>Lorem ipsum dolor sit amet</span></template>
      </VtmnListItem>
      <VtmnListItem>
        <template v-slot:text><span>Lorem ipsum</span></template>
        <template v-slot:subtext><span>Lorem ipsum dolor sit amet</span></template>
      </VtmnListItem>
    </VtmnList>
  </div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
