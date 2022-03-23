export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=3014%3A11530',
  },
};

export const argTypes = {
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the loader.',
    defaultValue: 'medium',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'medium' },
    },
    control: {
      type: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
};
