export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=359%3A30',
  },
};

export const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the radio button.',
    defaultValue: 'my-radio-button',
    control: {
      type: 'text',
    },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the radio button.',
    defaultValue: 'Label',
    control: {
      type: 'text',
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the radio button.',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};
