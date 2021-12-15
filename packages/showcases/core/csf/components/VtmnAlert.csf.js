export const argTypes = {
  title: {
    type: { name: 'string', required: true },
    description: 'The printed title',
    defaultValue: 'Alert title',
    control: { type: 'text' },
  },

  type: {
    type: { name: 'string', required: true },
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
    defaultValue: '',
    control: { type: 'text' },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout', 'mouseleave'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=612%3A1192',
  },
};
