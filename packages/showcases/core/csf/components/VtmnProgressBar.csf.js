export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the progressbar.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'default' },
    },
    control: {
      type: 'radio',
      options: ['default', 'linear', 'circular'],
    },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the linear progressbar.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'Loading' },
    },
    control: {
      type: 'radio',
      options: ['default', 'linear', 'circular'],
    },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the progressbar.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'medium' },
    },
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  minValue: {
    type: { name: 'number', required: false },
    description: 'The minimum value of the progressbar.',
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: { summary: '0' },
    },
    control: {
      type: 'number',
      max: maxValue,
    },
  },
  maxValue: {
    type: { name: 'number', required: false },
    description: 'The maximum value of the progressbar.',
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: { summary: '100' },
    },
    control: {
      type: 'number',
      min: minValue,
    },
  },
  currentValue: {
    type: { name: 'number', required: false },
    description: 'The current value of the progressbar.',
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: { summary: '50' },
    },
    control: {
      type: 'number',
      min: minValue,
      max: maxValue,
    },
  },
  indeterminate: {
    type: { name: 'boolean', required: false },
    description: 'The indeterminate state of the progressbar.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    control: {
      type: 'boolean',
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=2887%3A11057',
  },
};
