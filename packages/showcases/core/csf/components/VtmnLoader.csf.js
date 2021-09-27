export const argTypes = {
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the loader.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=3014%3A11530',
  },
};
