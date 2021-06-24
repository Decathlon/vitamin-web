import { VtmnToggle } from '@vtmn/vue/dist/esm/VtmnToggle';

export default {
  title: 'Components/VtmnToggle',
  component: VtmnToggle,
  argTypes: {
    identifier: {
      type: { name: 'string', required: true },
      description: 'The id of the toggle.',
      defaultValue: 'vtmn-toggle',
      control: { type: 'text' },
    },
    labelText: {
      type: { name: 'string', required: false },
      description: 'The label of the toggle.',
      defaultValue: 'Your label',
      control: { type: 'text' },
    },
    checked: {
      type: { name: 'boolean', required: false },
      description: 'The checked state of the toggle.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'The disabled state of the toggle.',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the toggle.',
      defaultValue: null,
      control: {
        type: 'select',
        options: ['small', 'medium'],
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
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit?node-id=612%3A1192',
    },
  },
};

const Template = (args) => ({
  components: { VtmnToggle },
  setup() {
    return { args };
  },
  template: '<VtmnToggle v-bind="args"/>',
});

export const Overview = Template.bind({});
Overview.args = {};
