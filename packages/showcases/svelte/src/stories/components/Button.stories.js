import ButtonView from './ButtonView.svelte';
import VtmnButton from '@vtmn/svelte/src/components/VtmnButton.svelte';

export default {
  title: 'Components/VtmnButton',
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
  },
};

const Template = (args) => ({
  Component: ButtonView,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
