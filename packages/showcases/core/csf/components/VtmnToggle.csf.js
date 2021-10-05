export const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the toggle.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'my-toggle' },
    },
    control: { type: 'text' },
  },
  checked: {
    type: { name: 'boolean', required: false },
    description: 'The checked state of the toggle.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    control: { type: 'boolean' },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the toggle.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'my-label' },
    },
    control: { type: 'text' },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the toggle.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    control: { type: 'boolean' },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the toggle.',
    table: {
      type: {
        summary: 'radio',
      },
      defaultValue: { summary: 'medium' },
    },
    control: {
      type: 'radio',
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
