import { VtmnButton } from '@vtmn/vue/dist/esm/VtmnButton';
import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export default {
  title: 'Components/VtmnButton',
  component: VtmnButton,
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant of the button.',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: [
          'primary',
          'primary-reversed',
          'secondary',
          'secondary-reversed',
          'ghost',
          'conversion',
        ],
      },
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the button.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'stretched'],
      },
    },
    iconLeft: {
      type: { name: 'string', required: false },
      description: 'The icon to display on the left hand side of button.',
      defaultValue: null,
      control: {
        type: 'select',
        options: ['', ...Object.keys(vitamixIconsList)],
      },
    },
    iconRight: {
      type: { name: 'string', required: false },
      description: 'The icon to display on the right hand side of button.',
      defaultValue: null,
      control: {
        type: 'select',
        options: ['', ...Object.keys(vitamixIconsList)],
      },
    },
    iconAlone: {
      type: { name: 'string', required: false },
      description: 'The to display when it is a button with icon only.',
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
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=31%3A136',
    },
  },
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
