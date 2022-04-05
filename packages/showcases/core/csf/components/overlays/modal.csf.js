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
  show: {
    type: { name: 'boolean', required: true },
    description: 'Display the modal',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  animationDisabled: {
    type: { name: 'boolean', require: false },
    description: 'Disable the fade animation on show',
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
};
