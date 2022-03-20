export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=3014%3A11530',
  },
};

export const argTypes = {
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the loader.',
    defaultValue: 'medium',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'medium' },
    },
    control: {
      type: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
  variant: {
    type: { name: 'string', required: true },
    description: 'Variant of the loader.',
    defaultValue: 'linear',
    control: {
      type: 'radio',
      options: ['linear', 'circular'],
    },
  },
  progress: {
    type: { name: 'number', required: false },
    description: 'Value of the progressbar',
    defaultValue: 30,
    control: {
      type: 'range',
      min: 0,
      max: 100,
    },
  },
  label: {
    type: { name: 'string', required: false },
    description: 'Label displayed for the loader',
    control: {
      type: 'text',
    },
  },
  indeterminate: {
    type: { name: 'boolean', required: false },
    description: 'Set the loader to indeterminate',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  withTrack: {
    type: { name: 'boolean', required: false },
    description: 'Display track path',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  img: {
    type: { name: 'string', required: false },
    description: 'Image source for circle loader',
    defaultValue: '',
    control: {
      type: 'text',
    },
  },
};
