export const parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=10847%3A27832',
  },
};

export const argTypes = {
  className: {
    type: { name: 'string', required: false },
    description: 'Custom classes to apply to the component',
    defaultValue: false,
    control: { type: 'text' },
  },

  navMenu: {
    type: { name: 'boolean', required: false },
    description: 'Diplay right nav menu button',
    defaultValue: false,
    control: { type: 'boolean' },
  },

  logo: {
    type: { name: 'boolean', required: false },
    description: 'Diplay Decathlon logo',
    defaultValue: false,
    control: { type: 'boolean' },
  },

  search: {
    type: { name: 'boolean', required: false },
    description: 'Diplay search input',
    defaultValue: false,
    control: { type: 'boolean' },
  },
};
