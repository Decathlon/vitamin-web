export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=4398%3A11429',
  },
};

export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the card.',
    defaultValue: 'top-image',
    control: {
      type: 'select',
      options: ['top-image', 'side-image', 'full-image'],
    },
  },
  fullImage: {
    type: { name: 'boolean', required: false },
    description: 'Define if image takes full screen. Only on variant top-image',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  contentOpaque: {
    type: { name: 'boolean', required: false },
    description: 'Define if image is opaque. Only on variant full-image',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  title: {
    type: { name: 'string', required: true },
    description: 'Title of the card.',
    defaultValue: 'Card title',
    control: {
      type: 'text',
    },
  },
  headingLevel: {
    type: { name: 'number', required: false },
    description: 'Heading level of the card title',
    defaultValue: 2,
    control: {
      type: 'range',
      min: 1,
      max: 6,
    },
  },
};
