export const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the select.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'undefined' },
    },
    control: { type: 'text' },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the select.',
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
    description: 'The default disabled value of the select',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'Select an option' },
    },
    control: { type: 'text' },
  },
  errorText: {
    type: { name: 'string', required: false },
    description: 'The error text message of the select.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'Error text goes here' },
    },
    control: { type: 'text' },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the select.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    control: { type: 'boolean' },
  },
  error: {
    type: { name: 'boolean', required: false },
    description: 'The state when the select is invalid/in error',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    control: {
      type: 'boolean',
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=2535%3A52',
  },
};
