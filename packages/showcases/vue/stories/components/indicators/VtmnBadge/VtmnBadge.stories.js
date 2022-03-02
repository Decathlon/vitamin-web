import { VtmnBadge } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/indicators/badge.csf';

export default {
  title: 'Components / Indicators / VtmnBadge',
  component: VtmnBadge,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnBadge },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center"><VtmnBadge v-bind="args" /></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
