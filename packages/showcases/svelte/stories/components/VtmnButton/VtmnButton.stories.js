import VtmnButtonView from './VtmnButtonView.svelte';
import VtmnButton from '@vtmn/svelte/src/components/VtmnButton.svelte';

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
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component',
      defaultValue: 'Button',
      control: {
        type: 'text',
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
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=31%3A136',
    },
  },
};

const Template = (args) => ({
  Component: VtmnButtonView,
  props: args,
});

export const Overview = Template.bind({});
Overview.args = {};
