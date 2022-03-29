export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2790%3A10831',
  },
};

export const argTypes = {
  content: {
    type: { name: 'string', required: true },
    description: 'Text displayed on the toast',
    defaultValue: 'This is the content of a toast',
    control: { type: 'text' },
  },
  withCloseButton: {
    type: { name: 'boolean', required: false },
    description: 'Show close button',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  withIcon: {
    type: { name: 'boolean', required: false },
    description: 'Display left icon',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};
