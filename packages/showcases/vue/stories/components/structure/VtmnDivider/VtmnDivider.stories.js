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
  template: `<div style="width: 400px; height: 250px;"><VtmnDivider v-bind="args" aria-labelledby="title-test">Label</VtmnDivider></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
