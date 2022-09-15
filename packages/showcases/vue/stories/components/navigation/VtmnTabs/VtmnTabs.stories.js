import { VtmnTabs, VtmnTabsItem } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/tabs.csf';

export default {
  title: 'Components / Navigation / VtmnTabs',
  component: VtmnTabs,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnTabs, VtmnTabsItem },
  setup() {
    return { args };
  },
  template: `<div style="width: 800px;">
      <VtmnTabs aria-label="Tabs list" v-bind="args">
        <VtmnTabsItem icon="heart-line">Tab Item 1</VtmnTabsItem>
        <VtmnTabsItem icon="heart-line" aria-selected="true">Tab Item 2</VtmnTabsItem>
        <VtmnTabsItem icon="heart-line" badgeValue="99">Tab Item 3</VtmnTabsItem>
        <VtmnTabsItem icon="heart-line" badgeValue="99">Tab Item 4</VtmnTabsItem>
      </VtmnTabs>
    </div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
