import { VtmnButton } from '@vtmn/vue/dist/esm/VtmnButton';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnButton.csf';

export default {
  title: 'Components/VtmnButton',
  component: VtmnButton,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnButton },
  setup() {
    return { args };
  },
  template: '<VtmnButton v-bind="args">Button</VtmnButton>',
});

export const Overview = Template.bind({});
Overview.args = {};
