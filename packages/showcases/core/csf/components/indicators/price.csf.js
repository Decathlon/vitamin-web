export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=7639%3A18237',
  },
};

export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the price.',
    defaultValue: 'default',
    control: {
      type: 'select',
      options: ['default', 'accent', 'alert', 'strikethrough'],
    },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the price.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};
