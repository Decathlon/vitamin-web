export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=3451%3A10738',
  },
};

export const argTypes = {
  width: {
    type: { name: 'number', required: false },
    description: 'Width of the skeleton.',
    defaultValue: 100,
    control: {
      type: 'number',
      min: 0,
    },
  },
  height: {
    type: { name: 'number', required: false },
    description: 'Height of the skeleton.',
    defaultValue: undefined,
    control: {
      type: 'number',
      min: 0,
    },
  },
  shape: {
    type: { name: 'string', required: false },
    description: 'Define the type of shape.',
    defaultValue: 'line',
    control: {
      type: 'select',
      options: ['line', 'avatar'],
    },
  },
};
