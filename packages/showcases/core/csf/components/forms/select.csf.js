export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout', 'change'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2535%3A52',
  },
};

export const argTypes = {
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the select.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  error: {
    type: { name: 'boolean', required: false },
    description: 'The error state of the select.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  errorText: {
    type: { name: 'string', required: false },
    description: 'The error text message of the select.',
    defaultValue: 'Error text goes here',
    control: { type: 'text' },
  },
  id: {
    type: { name: 'string', required: true },
    description: 'The id of the select',
    defaultValue: 'vtmn-select',
    control: { type: 'text' },
  },
  labelText: {
    type: { name: 'string', required: true },
    description: 'The label of the select.',
    defaultValue: 'Label',
    control: { type: 'text' },
  },
};
