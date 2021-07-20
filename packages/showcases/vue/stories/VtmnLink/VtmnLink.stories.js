import { VtmnLink } from '@vtmn/vue/dist/esm/VtmnLink';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnLink.csf';

export default {
  title: 'Components/VtmnLink',
  component: VtmnLink,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnLink },
  setup() {
    return { args };
  },
  template: '<VtmnLink v-bind="args">Link</VtmnLink>',
});

export const Overview = Template.bind({});
Overview.args = {};
