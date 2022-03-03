export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2603%3A9428',
  },
};

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
      type: 'select',
      options: ['default', 'brand', 'reversed', 'accent', 'alert'],
    },
  },
  value: {
    type: { name: 'number', required: false },
    description: 'The value in the badge.',
    defaultValue: 6,
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: { summary: 0 },
    },
    control: { type: 'range', min: 0, max: 100 },
  },
};
