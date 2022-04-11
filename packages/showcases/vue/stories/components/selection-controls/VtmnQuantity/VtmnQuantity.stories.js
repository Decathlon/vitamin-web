import { ref } from 'vue';
import { VtmnQuantity } from '@vtmn/vue';
import {
  parameters,
  argTypes,
} from '@vtmn/showcase-core/csf/components/selection-controls/quantity.csf';

const { id, value, ...restOfArgTypes } = argTypes;

export default {
  title: 'Components / Selection controls / VtmnQuantity',
  component: VtmnQuantity,
  argTypes: {
    ...restOfArgTypes,
    identifier: {
      type: { name: 'string', required: true },
      description: 'Id of the input.',
      defaultValue: 'quantity-story',
      control: {
        type: 'text',
      },
    },
  },
  parameters,
};

const Template = (args) => ({
  components: { VtmnQuantity },
  setup() {
    let quantitySelected = ref(0);

    return {
      quantitySelected,
      args,
    };
  },
  template: `<VtmnQuantity v-model="quantitySelected" v-bind="args"/>`,
});

export const Overview = Template.bind({});
Overview.args = {};
