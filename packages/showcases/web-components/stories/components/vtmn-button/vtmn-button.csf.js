export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the button.',
    defaultValue: 'primary',
    control: {
      type: 'radio',
      options: [
        'primary',
        'primary-reversed',
        'secondary',
        'tertiary',
        'ghost',
        'ghost-reversed',
        'conversion',
      ],
    },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the button.',
    defaultValue: 'medium',
    control: {
      type: 'radio',
      options: ['small', 'medium', 'large', 'stretched'],
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=31%3A136',
  },
};
