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
    description: 'Name used on the input radio',
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
    type: { name: 'number', required: false },
    description: 'How many stars to display.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  rating: {
    type: { name: 'boolean', required: false },
    description: 'How many stars are filled.',
    defaultValue: 0,
    control: { type: 'range', min: 0, max: 5, step: 0.25 },
  },
};
