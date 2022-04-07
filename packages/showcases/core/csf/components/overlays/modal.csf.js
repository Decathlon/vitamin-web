export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout', 'mouseleave'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2993%3A12130',
  },
};

export const argTypes = {
  open: {
    type: { name: 'boolean', required: true },
    description: 'Opens the modal',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};
