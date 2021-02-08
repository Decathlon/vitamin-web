import { VtmnButton } from '@vtmn/vue/dist/esm/button';

export default {
  title: 'Components/Button',
  component: VtmnButton,
  argTypes: {
    variant: {
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
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'stretched'],
      },
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VtmnButton },
  template: '<VtmnButton v-bind="$props">Button</VtmnButton>',
});

export const Default = Template.bind({});
Default.args = {
  style: "background-color: 'red'",
};
