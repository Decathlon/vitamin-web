export const parameters = {
  actions: {
    handles: ['mouseover', 'click', 'focus', 'keypress', 'keydown'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=6527%3A15021',
  },
};

export const argTypes = {
  variant: {
    type: { name: 'string', required: true },
    description: 'Variant of search component.',
    control: {
      type: 'select',
      options: ['default', 'persistent', 'on-content'],
    },
    defaultValue: 'default',
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'Disabled state',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'Size of input.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium'],
    },
  },
  placeholder: {
    type: { name: 'string', required: false },
    description: 'The placeholder of the search bar.',
    defaultValue: 'Search',
    control: { type: 'text' },
  },
  value: {
    type: { name: 'string', required: false },
    description: 'The value of the search bar.',
    defaultValue: undefined,
    control: { type: 'text' },
  },
};
