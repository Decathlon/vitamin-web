import { VtmnTag } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/tag.csf';

export default {
  title: 'Components / Indicators / VtmnTag',
  component: VtmnTag,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnTag },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center"><VtmnTag v-bind="args">Tag</VtmnTag></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
