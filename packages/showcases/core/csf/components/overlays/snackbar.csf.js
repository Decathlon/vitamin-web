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
  withCloseButton: {
    type: { name: 'boolean', required: false },
    description: 'Show close button',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  actionLabel: {
    type: { name: 'string', required: false },
    describe: 'Label of the action. If set, it displays action button.',
    defaultValue: 'Action',
    control: {
      type: 'text',
    },
  },
  timeout: {
    type: { name: 'number', required: false },
    description: 'Duration of the animation',
    defaultValue: 4500,
    control: {
      type: 'number',
    },
  },
};
