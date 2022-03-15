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
  title: {
    type: { name: 'string', required: true },
    description: 'The printed title',
    defaultValue: 'Modal title',
    control: { type: 'text' },
  },
  show: {
    type: { name: 'boolean', required: true },
    description: 'Display the modal',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  disableAnimation: {
    type: { name: 'boolean', require: false },
    description: 'Disable the fade animation on show',
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
};
