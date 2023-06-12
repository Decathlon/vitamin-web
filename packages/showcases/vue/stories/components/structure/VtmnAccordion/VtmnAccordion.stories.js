import { VtmnAccordion, VtmnBadge } from '@vtmn/vue';
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

const WithSummarySlotTemplate = (args) => ({
  components: { VtmnAccordion },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; height: 250px;">
    <VtmnAccordion v-bind="args">
      <template #summaryComponent>
        <span>Title <VtmnBadge value="1" variant="brand"/></span>
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </VtmnAccordion>
  </div>`,
});

export const Overview = Template.bind({});
Overview.args = {};

export const WithSummarySlot = WithSummarySlotTemplate.bind({});
WithSummarySlot.args = {};
