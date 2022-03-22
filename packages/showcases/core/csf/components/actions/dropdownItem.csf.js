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
  label: {
    type: { name: 'string', required: false },
    description: 'Dropdown item label.',
    defaultValue: 'Lorem ipsum',
    control: {
      type: 'text',
    },
  },

  value: {
    type: { name: 'string' },
    description: 'banana',
    defaultValue: 'Default label',
    control: {
      type: 'text',
    },
  },

  divider: {
    type: { name: 'boolean' },
    description: 'Dropdown item divider',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },

  icon: {
    type: { name: 'string' },
    description: 'Dropdown item icon',
    defaultValue: null,
    control: {
      type: 'text',
    },
  },
};
