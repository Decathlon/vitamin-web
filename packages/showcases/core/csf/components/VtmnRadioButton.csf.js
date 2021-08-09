export const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the radio button.',
    defaultValue: 'vtmn-radio-button',
    control: { type: 'text' },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the radio button.',
    defaultValue: 'Your label',
    control: { type: 'text' },
  },
  name: {
    type: { name: 'string', required: false },
    description: 'The name of the radio.',
    defaultValue: null,
    control: { type: 'text' },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the radio.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  value: {
    type: { name: 'string', required: false },
    description: 'The value of the radio.',
    defaultValue: null,
    control: {
      type: 'text',
    },
  },
  checked: {
    type: { name: 'boolean', required: false },
    description: 'The checked state of the radio.',
    defaultValue: null,
    control: {
      type: 'boolean',
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=359%3A30',
  },
};
