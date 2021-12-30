export const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the toggle.',
    defaultValue: 'my-toggle',
    control: {
      type: 'text',
    },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the toggle.',
    defaultValue: 'My label',
    control: {
      type: 'text',
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the toggle.',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the toggle.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium'],
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=612%3A1192',
  },
};
