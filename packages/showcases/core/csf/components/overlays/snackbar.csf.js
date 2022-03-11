export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2796%3A12600',
  },
};

export const argTypes = {
  content: {
    type: { name: 'string', required: true },
    description: 'Text display on the snackbar',
    defaultValue: 'This is the content of a snackbar',
    control: { type: 'text' },
  },
  show: {
    type: { name: 'boolean', required: true },
    description: 'Display the snackbar',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  timeout: {
    type: { name: 'number', require: false },
    description: 'Timeout before the snackbar disappear',
    defaultValue: 5000,
    control: {
      type: 'number',
      min: 0,
    },
  },
  displayCloseButton: {
    type: { name: 'boolean', required: true },
    description: 'Show close button',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};
