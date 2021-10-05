import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the input.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'my-input' },
    },
    control: { type: 'text' },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the input.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'My label' },
    },
    control: { type: 'text' },
  },
  placeholder: {
    type: { name: 'string', required: false },
    description: 'The placeholder of the input.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'My placeholder' },
    },
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
    control: { type: 'text' },
  },
  icon: {
    type: { name: 'string', required: false },
    description: 'The icon of text input.',
    table: {
      type: {
        summary: 'string',
        detail: 'Vitamix icon',
      },
      defaultValue: { summary: 'undefined' },
    },
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
  multiline: {
    type: { name: 'boolean', required: false },
    description: 'If the component is a textarea or an input.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
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
    control: { type: 'boolean' },
  },
  variant: {
    type: { name: 'radio', required: false },
    description: 'The state of the input.',
    table: {
      type: {
        summary: 'radio',
      },
      defaultValue: { summary: 'default' },
    },
    control: {
      type: 'radio',
      options: ['default', 'error', 'valid'],
    },
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
