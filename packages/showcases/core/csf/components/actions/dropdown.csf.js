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
    description: 'The main label. If not set the label is not displayed.',
    defaultValue: 'Label',
    control: {
      type: 'text',
    },
  },

  defaultOption: {
    type: { name: 'string' },
    description: 'Default dropdown label.',
    defaultValue: 'Default option',
    control: {
      type: 'text',
    },
  },

  options: {
    description: 'Default dropdown label.',
    defaultValue: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
      { label: 'Option 4', value: 'option-4' },
    ],
  },
};
