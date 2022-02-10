import { VtmnIcon } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/guidelines/iconography.csf';

export default {
  title: 'Guidelines / Iconography /VtmnIcon',
  component: VtmnIcon,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnIcon },
  setup() {
    return { args };
  },
  template: `<VtmnIcon v-bind="args" />`,
});

export const Overview = Template.bind({});
Overview.args = {};
