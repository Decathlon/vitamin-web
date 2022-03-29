export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2421%3A3',
  },
};

export const argTypes = {
  labelText: {
    type: { name: 'string', required: false },
    description: 'The main label. If not set the label is not displayed.',
    defaultValue: 'Label',
    control: {
      type: 'text',
    },
  },

  defaultOption: {
    type: { name: 'string' },
    description: 'Default dropdown label.',
    defaultValue: 'Default label',
    control: {
      type: 'text',
    },
  },

  disabled: {
    type: { name: 'boolean' },
    description: 'Disabled state',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },

  menuMaxHeight: {
    type: { name: 'number' },
    description: 'Max height of menu, this enable scroll',
    defaultValue: null,
    control: {
      type: 'text',
    },
  },
};
