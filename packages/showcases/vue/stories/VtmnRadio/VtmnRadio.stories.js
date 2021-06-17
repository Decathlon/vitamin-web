import { VtmnRadio } from '@vtmn/vue/dist/esm/VtmnRadio';

export default {
  title: 'Components/VtmnRadio',
  component: VtmnRadio,
  argTypes: {
    identifier: {
      type: { name: 'string', required: true },
      description: 'The id of the radio and its label.',
      defaultValue: 'my-radio',
      control: {
        type: 'text',
      },
    },
    labelText: {
      type: { name: 'string', required: false },
      description: 'The label of the radio.',
      defaultValue: 'My label',
      control: {
        type: 'text',
      },
    },
    name: {
      type: { name: 'string', required: false },
      description: 'The name of the radio.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    value: {
      type: { name: 'string', required: false },
      description: 'The value of the radio.',
      defaultValue: null,
      control: {
        type: 'text',
      },
    },
    checked: {
      type: { name: 'boolean', required: false },
      description: 'The checked state of the radio',
      defaultValue: null,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the radio',
      defaultValue: null,
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    backgrounds: { default: 'grey' },
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit?node-id=359%3A30',
    },
  },
};

const Template = (args) => ({
  components: { VtmnRadio },
  setup() {
    return { args };
  },
  template: '<VtmnRadio v-bind="args"/>',
});

export const Overview = Template.bind({});
Overview.args = {};
