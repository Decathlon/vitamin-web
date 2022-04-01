export const parameters = {
  actions: {
    handles: [
      'mouseenter',
      'click',
      'focusin',
      'focusout',
      'add',
      'subtract',
      'change',
    ],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=6937%3A16423',
  },
};

export const argTypes = {
  id: {
    type: { name: 'string', required: true },
    description: 'Id of the input.',
    defaultValue: 'quantity-story',
    control: {
      type: 'text',
    },
  },
  label: {
    type: { name: 'string', required: true },
    description: 'Label of the quantity input',
    defaultValue: 'Label',
    control: {
      type: 'text',
    },
  },
  value: {
    type: { name: 'number', required: true },
    description: 'Value of the input',
    defaultValue: 30,
    control: {
      type: 'number',
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'Disable the input',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  min: {
    type: { name: 'number', required: false },
    description: 'Minimum value of the input',
    defaultValue: 0,
    control: {
      type: 'number',
    },
  },
  max: {
    type: { name: 'number', required: false },
    description: 'Maximum value of the input',
    control: {
      type: 'number',
    },
  },
  error: {
    type: { name: 'string', required: false },
    description: 'Error display to the input',
    control: {
      type: 'text',
    },
  },
  step: {
    type: { name: 'number', required: false },
    description: 'Step of the input',
    defaultValue: 1,
    control: {
      type: 'number',
      min: 0,
    },
  },
};
