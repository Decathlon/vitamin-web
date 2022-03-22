export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=6840%3A14866',
  },
};

export const argTypes = {
  align: {
    type: { name: 'string', required: false },
    description: 'The alignment of the tabs.',
    defaultValue: 'start',
    control: {
      type: 'select',
      options: ['start', 'center', 'end'],
    },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the tabs.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium'],
    },
  },
};
