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
        'bottom',
        'left',
        'right',
        'top-left',
        'top',
        'top-right',
      ],
    },
  },

  tooltip: {
    type: { name: 'string', required: false },
    description: 'The printed tooltip',
    defaultValue: 'Tooltip example',
    control: { type: 'text' },
  },

  icon: {
    type: { name: 'string', required: false },
    description: 'The tooltip icon',
    default: '',
    control: {
      type: 'select',
      options: ['', 'question-line', 'information-line', 'error-warning-line'],
    },
  },

  textValue: {
    type: { name: 'string', required: false },
    description: 'The text of the hoverable element',
    defaultValue: 'Tooltip',
    control: { type: 'text' },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout', 'mouseleave'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=612%3A1192',
  },
};
