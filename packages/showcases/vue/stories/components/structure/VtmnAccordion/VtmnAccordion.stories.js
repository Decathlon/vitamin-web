import { VtmnAccordion } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/structure/accordion.csf';

export default {
  title: 'Components / Structure / VtmnAccordion',
  component: VtmnAccordion,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnAccordion },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; height: 250px;"><VtmnAccordion v-bind="args">Lorem ipsum dolor sit amet consectetur adipisicing elit.</VtmnAccordion></div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
