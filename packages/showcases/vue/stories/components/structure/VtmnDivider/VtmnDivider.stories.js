import { VtmnDivider } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/structure/divider.csf';

export default {
  title: 'Components / Structure / VtmnDivider',
  component: VtmnDivider,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnDivider },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; height: 250px; display:flex;"><VtmnDivider v-bind="args">Label</VtmnDivider></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
