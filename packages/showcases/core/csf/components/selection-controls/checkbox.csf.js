export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=783%3A9869',
  },
};

export const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the checkbox.',
    defaultValue: 'my-checkbox',
    control: {
      type: 'text',
    },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the checkbox.',
    defaultValue: 'Label',
    control: {
      type: 'text',
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the checkbox.',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};
