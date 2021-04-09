import VtmnTextInput from '@vtmn/svelte/src/components/VtmnTextInput.svelte';

export default {
  title: 'Components/VtmnTextInput',
  component: VtmnTextInput,
  argTypes: {
    id: {
      defaultValue: 'vtmn-input',
    },
    labelText: {
      defaultValue: 'Label',
    },
    placeholder: {
      defaultValue: 'Placeholder Text',
    },
    helperText: {
      defaultValue: 'Helper text goes here',
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
  Component: VtmnTextInput,
  props: args,
});

export const Overview = Template.bind({});
Overview.args = {};
