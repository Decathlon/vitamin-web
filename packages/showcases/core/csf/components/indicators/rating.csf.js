export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2802%3A10337',
  },
};

export const argTypes = {
  name: {
    type: { name: 'string', required: false },
    description: 'Name used on the input radio.',
    defaultValue: 'rating',
    control: {
      type: 'text',
    },
  },
  emphasis: {
    type: { name: 'boolean', required: false },
    description: 'The variant of the rating.',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
    if: { arg: 'readonly' },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'Size of the rating.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium'],
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'Whether the rating is disabled.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  readonly: {
    type: { name: 'boolean', required: false },
    description: 'Whether the rating is read only.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  compact: {
    type: { name: 'boolean', required: false },
    description: 'Display compact mode. Only if readonly is true.',
    defaultValue: false,
    control: { type: 'boolean' },
    if: { arg: 'readonly' },
  },
  value: {
    type: { name: 'number', required: false },
    description:
      'Rating value. NB: if readonly is set to false, the value step is 1.',
    defaultValue: 0,
    control: { type: 'range', min: 0, max: 5, step: 0.1 },
  },
  comments: {
    type: { name: 'string', required: false },
    description:
      'Comments displayed after the rating. Only if readonly is true.',
    defaultValue: undefined,
    control: { type: 'text' },
    if: { arg: 'readonly' },
  },
  showValue: {
    type: { name: 'boolean', required: false },
    description: 'Display the rating value. Only if readonly is true.',
    defaultValue: false,
    control: { type: 'boolean' },
    if: { arg: 'readonly' },
  },
};
