import { VtmnNavbarLink } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/navbar-link.csf';

export default {
  title: 'Components / Navigation / VtmnNavbarLink',
  component: VtmnNavbarLink,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnNavbarLink },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center">
    <VtmnNavbarLink href="#" icon="question-line" label="Contact us" v-bind="args"></VtmnNavbarLink>
    </div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
