export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the badge.',
    defaultValue: '',
    control: {
      type: 'select',
      options: ['default', 'brand', 'reversed', 'accent'],
    },
  },
  value: {
    type: { name: 'number', required: false },
    description: 'The value of the badge.',
    defaultValue: null,
  },
};

export const parameters = {
  backgrounds: { default: 'grey' },
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=1450%3A8683',
  },
};
