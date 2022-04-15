export const parameters = {
  actions: {
    handles: [
      'mouseenter',
      'click',
      'focusin',
      'focusout',
      'change',
      'clickOutside',
    ],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2421%3A3',
  },
};

export const argTypes = {
  label: {
    type: { name: 'string', required: false },
    description: 'The main label. If not set the label is not displayed.',
    defaultValue: 'Label',
    control: {
      type: 'text',
    },
  },

  summary: {
    type: { name: 'string', required: true },
    description: 'Default dropdown label.',
    defaultValue: 'Default label',
    control: {
      type: 'text',
    },
  },

  disabled: {
    type: { name: 'boolean', required: false },
    description: 'Disabled state',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};
