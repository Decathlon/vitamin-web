import { VtmnBadge } from '@vtmn/vue/dist/esm/VtmnBadge';

export default {
  title: 'Components/VtmnBadge',
  component: VtmnBadge,
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'outside'],
      },
    },
    position: {
      type: { name: 'string', required: false },
      defaultValue: 'top',
      control: {
        type: 'select',
        options: ['top', 'bottom'],
      },
    },
    content: {
      type: { name: 'string', required: true },
      description: 'The content of the badge',
    },
    hide: {
      type: { name: 'boolean', required: false },
      description: 'If you want hide the badge',
      defaultValue: false,
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
  components: { VtmnBadge },
  setup() {
    return { args };
  },
  template: '<VtmnBadge v-bind="args"><p>An area</p></VtmnBadge >',
});

export const Overview = Template.bind({});
Overview.args = {};
