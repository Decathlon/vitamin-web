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
    description: 'Text displayed on the snackbar',
    defaultValue: 'This is the content of a snackbar',
    control: { type: 'text' },
  },
  withCloseButton: {
    type: { name: 'boolean', required: true },
    description: 'Show close button',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  actionLabel: {
    type: { name: 'string', required: false },
    describe: 'Label of the action. If set, it displays action button',
    control: {
      type: 'text',
    },
  },
};
