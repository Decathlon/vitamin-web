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
    defaultValue: 'default',
    control: {
      type: 'radio',
      options: ['default', 'brand', 'reversed', 'accent'],
    },
  },
  value: {
    type: { name: 'number', required: false },
    description: 'The value in the badge.',
    defaultValue: 0,
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: { summary: 0 },
    },
    control: { type: 'range', min: 0, max: 100 },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=1450%3A8683',
  },
};
