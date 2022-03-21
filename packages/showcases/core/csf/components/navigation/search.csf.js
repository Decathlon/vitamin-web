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
    type: { name: 'string', required: false },
    description: 'The variant of the search bar.',
    defaultValue: 'default',
    control: {
      type: 'select',
      options: ['default', 'persistent', 'on-content'],
    },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the search bar.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium'],
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'Whether the search bar is disabled.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    defaultValue: false,
    control: { type: 'boolean' },
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
