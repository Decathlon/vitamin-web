export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=8029%3A29057',
  },
};

export const argTypes = {
  summary: {
    type: { name: 'string', required: true },
    description: 'Summary of the accordion',
    defaultValue: 'Item 1',
    control: {
      type: 'text',
    },
  },
  open: {
    type: { name: 'boolean', required: false },
    description: 'Define if accorion is open or not',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  withIconLeft: {
    type: { name: 'boolean', required: false },
    description: 'Display left icon on summary',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'Disable the accordion',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  onOpen: {
    type: { name: 'function', required: false },
    description: 'Callback fired when the accordion is opening',
    action: 'onOpen',
  },
  onClose: {
    type: { name: 'function', required: false },
    description: 'Callback fired when the accordion is closing',
    action: 'onClose',
  },
};
