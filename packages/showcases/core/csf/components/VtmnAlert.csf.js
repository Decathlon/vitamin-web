export const argTypes = {
  title: {
    type: { name: 'string', required: true },
    description: 'The printed title',
    defaultValue: 'Alert title',
    control: { type: 'text' },
  },

  message: {
    type: { name: 'string', required: true },
    description: 'The printed message',
    defaultValue: null,
    control: { type: 'text' },
  },

  closable: {
    type: { name: 'boolean', required: false },
    description: 'The presence of closing icon',
    defaultValue: false,
    control: { type: 'boolean' },
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
