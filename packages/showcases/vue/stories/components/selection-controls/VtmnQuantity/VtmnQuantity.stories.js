import { VtmnQuantity } from '@vtmn/vue';
import { parameters } from '@vtmn/showcase-core/csf/components/selection-controls/quantity.csf';

export default {
  title: 'Components / Selection controls / VtmnQuantity',
  component: VtmnQuantity,
  argTypes: {
    identifier: {
      type: { name: 'string', required: true },
      description: 'Id of the input.',
      defaultValue: 'quantity-story',
      control: {
        type: 'text',
      },
    },
    label: {
      type: { name: 'string', required: true },
      description: 'Label of the quantity input',
      defaultValue: 'Label',
      control: {
        type: 'text',
      },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'Disable the input',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    min: {
      type: { name: 'number', required: false },
      description: 'Minimum value of the input',
      defaultValue: 0,
      control: {
        type: 'number',
      },
    },
    max: {
      type: { name: 'number', required: false },
      description: 'Maximum value of the input',
      control: {
        type: 'number',
      },
    },
    error: {
      type: { name: 'string', required: false },
      description: 'Error display to the input',
      control: {
        type: 'text',
      },
    },
    step: {
      type: { name: 'number', required: false },
      description: 'Step of the input',
      defaultValue: 1,
      control: {
        type: 'number',
        min: 0,
      },
    },
  },
  parameters,
};

const Template = (args) => ({
  components: { VtmnQuantity },
  setup() {
    return { args };
  },
  template: `<VtmnQuantity v-bind="args"/>`,
});

export const Overview = Template.bind({});
Overview.args = {};
