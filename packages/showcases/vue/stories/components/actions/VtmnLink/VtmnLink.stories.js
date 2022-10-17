import { VtmnLink } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/actions/link.csf';

export default {
  title: 'Components / Actions / VtmnLink',
  component: VtmnLink,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnLink },
  setup() {
    return { args };
  },
  template: `<VtmnLink target="_blank" v-bind="args">Link</VtmnLink>`,
});

export const Overview = Template.bind({});
Overview.args = {};
