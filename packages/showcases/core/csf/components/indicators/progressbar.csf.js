export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=2887%3A11057',
  },
};

export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the progress bar.',
    defaultValue: 'linear',
    control: {
      type: 'select',
      options: ['linear', 'circular'],
    },
  },

  size: {
    type: { name: 'string', required: false },
    description: 'The size of the progress bar.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },

  status: {
    type: { name: 'string', required: false },
    description: 'The status of the progress bar.',
    defaultValue: 'determinate',
    control: {
      type: 'select',
      options: ['determinate', 'indeterminate'],
    },
  },

  value: {
    type: { name: 'number', required: false },
    description: 'The value of the progress bar.',
    defaultValue: 50,
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: { summary: 0 },
    },
    control: { type: 'range', min: 0, max: 100 },
  },

  imageSrc: {
    type: { name: 'string', required: false },
    description: 'The image src of the progress bar.',
    defaultValue: undefined,
    control: {
      type: 'text',
    },
  },

  imageAlt: {
    type: { name: 'string', required: false },
    description: 'The image alt of the progress bar.',
    defaultValue: undefined,
    control: {
      type: 'text',
    },
  },

  loadingText: {
    type: { name: 'string', required: false },
    description: 'The loading text of the progress bar.',
    defaultValue: 'Loading',
    control: { type: 'text' },
  },
  labelId: {
    type: { name: 'string', required: false },
    description: 'Id of the label.',
    defaultValue: undefined,
    control: { type: 'text' },
  },
};
