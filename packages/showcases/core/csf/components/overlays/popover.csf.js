export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2756%3A10788',
  },
};

export const argTypes = {
  position: {
    control: 'select',
    options: [
      'top-left',
      'top',
      'top-right',
      'right',
      'bottom-right',
      'bottom',
      'bottom-left',
      'left',
    ],
    description: 'The position of the popover.',
    defaultValue: 'bottom',
  },
  placeholder: {
    type: { name: 'string', required: false },
    description: 'The placeholder of the popover.',
    defaultValue: 'Placeholder Text',
    control: { type: 'text' },
  },
  title: {
    type: { name: 'string', required: false },
    description: 'The title of the popover.',
    defaultValue: 'This is the title of the popover',
    control: { type: 'text' },
  },
  body: {
    type: { name: 'string', required: false },
    description: 'The body of the popover.',
    defaultValue: 'This is the body of the popover',
    control: { type: 'text' },
  },
};
