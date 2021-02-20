import ButtonView from './ButtonView.svelte';
import Button from '@vtmn/svelte/src/components/Button.svelte';

export default {
  title: 'Components/Button',
  component: Button,
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
