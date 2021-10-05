export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the badge.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'default' },
    },
    control: {
      type: 'radio',
      options: ['default', 'brand', 'reversed', 'accent'],
    },
  },
  value: {
    type: { name: 'number', required: false },
    description: 'The value of the badge.',
    table: {
      type: {
        summary: 'number',
        detail: 'number between 0 and 100',
      },
      defaultValue: { summary: '0' },
    },
    control: {
      type: 'number',
      min: 0,
      max: 100,
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=1450%3A8683',
  },
};
