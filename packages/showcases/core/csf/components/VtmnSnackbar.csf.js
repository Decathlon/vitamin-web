export const argTypes = {
  buttonLabel: {
    type: { name: 'string', required: false },
    description: 'The label of the snackbar button',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'undefined' },
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=2796%3A12600',
  },
};
