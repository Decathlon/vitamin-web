import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the input.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'undefined' },
    },
    defaultValue: 'undefined',
    control: { type: 'text' },
  },
  placeholder: {
    type: { name: 'string', required: false },
    description: 'The placeholder of the input.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'Placeholder Text' },
    },
    defaultValue: 'Placeholder Text',
    control: { type: 'text' },
  },
  helperText: {
    type: { name: 'string', required: false },
    description: 'The helper text message of the input.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'Helper text goes here' },
    },
    defaultValue: 'Helper text goes here',
    control: { type: 'text' },
  },
  state: {
    type: { name: 'string', required: false },
    description: 'The state of the input.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'default' },
    },
    defaultValue: 'default',
    control: {
      type: 'radio',
      options: ['default', 'valid', 'error'],
    },
  },
  icon: {
    type: { name: 'string', required: false },
    description: 'The icon of text input.',
    table: {
      type: {
        summary: 'string',
        detail: 'VitamixId',
      },
      defaultValue: { summary: 'undefined' },
    },
    defaultValue: 'undefined',
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
  textarea: {
    type: { name: 'boolean', required: false },
    description: 'Whether the component is a textarea or an input.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    defaultValue: false,
    control: { type: 'boolean' },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the input.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
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
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=150%3A3410',
  },
};
