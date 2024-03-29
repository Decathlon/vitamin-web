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
  timeout: {
    type: { name: 'number', required: false },
    description: 'Duration of the animation',
    defaultValue: 4500,
    control: {
      type: 'number',
    },
  },
};
