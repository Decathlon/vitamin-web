import { VtmnTextInput } from '@vtmn/vue/dist/esm/VtmnTextInput';

import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export default {
  title: 'Components/VtmnTextInput',
  component: VtmnTextInput,
  argTypes: {
    identifier: {
      type: { name: 'string', required: true },
      description: 'Id of the text input',
      defaultValue: 'my-textinput',
      control: {
        type: 'text',
      },
    },
    labelText: {
      type: { name: 'string', required: true },
      description: 'The label of the text input',
      defaultValue: 'My label',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      type: { name: 'string', required: true },
      description: 'The placeholder of the text input',
      defaultValue: 'My placeholder',
      control: {
        type: 'text',
      },
    },
    helperText: {
      type: { name: 'string', required: true },
      description: 'The helper of the text input',
      defaultValue: 'My helper',
      control: {
        type: 'text',
      },
    },
    multiline: {
      type: { name: 'boolean', required: false },
      description: 'Whether the text input is multiline or not.',
      defaultValue: null,
      control: {
        type: 'boolean',
      },
    },
    valid: {
      type: { name: 'boolean', required: false },
      description: 'The valid variant state of the text input.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    error: {
      type: { name: 'boolean', required: false },
      description: 'The error variant state of the text input.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the text input.',
      defaultValue: null,
      control: {
        type: 'boolean',
      },
    },
    icon: {
      type: { name: 'string', required: false },
      description: 'Icon font to be displayed',
      defaultValue: null,
      control: {
        type: 'select',
        options: ['', ...Object.keys(vitamixIconsList)],
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
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit?node-id=150%3A4893',
    },
  },
};

const Template = (args) => ({
  components: { VtmnTextInput },
  setup() {
    return { args };
  },
  template: '<VtmnTextInput v-bind="args"/>',
});

export const Overview = Template.bind({});
Overview.args = {};
