import { VtmnTooltip } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/tooltip.csf';

export default {
  title: 'Components / Overlays / Tooltip',
  component: VtmnTooltip,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnTooltip },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center"><VtmnTooltip v-bind="args">Tooltip</VtmnTooltip></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
