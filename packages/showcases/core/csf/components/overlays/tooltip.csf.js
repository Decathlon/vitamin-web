export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout', 'mouseleave'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2756%3A10686',
  },
};

export const argTypes = {
  position: {
    type: { name: 'string', required: false },
    description: 'The tooltip position',
    defaultValue: 'top',
    control: {
      type: 'select',
      options: [
        'bottom-left',
        'bottom',
        'bottom-right',
        'left',
        'right',
        'top-left',
        'top',
        'top-right',
      ],
    },
  },

  tooltip: {
    type: { name: 'string', required: true },
    description: 'The printed tooltip',
    defaultValue: 'Tooltip example',
    control: { type: 'text' },
  },

  children: {
    type: { name: 'string', required: true },
    description: 'The tooltip children',
    defaultValue: null,
  },
};
