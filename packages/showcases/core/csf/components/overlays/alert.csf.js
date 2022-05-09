export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout', 'mouseleave'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2983%3A15032',
  },
};

export const argTypes = {
  title: {
    type: { name: 'string', required: true },
    description: 'The printed title',
    defaultValue: 'Alert title',
    control: { type: 'text' },
  },

  variant: {
    type: { name: 'string', required: false },
    description: 'The alert type',
    defaultValue: 'info',
    control: {
      type: 'select',
      options: ['success', 'warning', 'danger', 'info'],
    },
  },

  message: {
    type: { name: 'string', required: true },
    description: 'The printed message',
    defaultValue: undefined,
    control: { type: 'text' },
  },
};
