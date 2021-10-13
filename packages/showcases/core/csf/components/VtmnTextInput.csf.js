import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the input.',
    defaultValue: 'vtmn-input',
    control: { type: 'text' },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the input.',
    defaultValue: 'Label',
    control: { type: 'text' },
  },
  placeholder: {
    type: { name: 'string', required: false },
    description: 'The placeholder of the input.',
    defaultValue: 'Placeholder Text',
    control: { type: 'text' },
  },
  helperText: {
    type: { name: 'string', required: false },
    description: 'The helper text message of the input.',
    defaultValue: 'Helper text goes here',
    control: { type: 'text' },
  },
  icon: {
    type: { name: 'string', required: false },
    description: 'The icon of text input.',
    defaultValue: 'home-fill',
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
  multiline: {
    type: { name: 'boolean', required: false },
    description: 'If the component is a textarea or an input.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the input.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  valid: {
    type: { name: 'boolean', required: false },
    description: 'The valid state of the input.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  error: {
    type: { name: 'boolean', required: false },
    description: 'The error state of the input.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=150%3A3410',
  },
};
