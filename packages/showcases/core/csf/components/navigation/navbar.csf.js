export const parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=10847%3A27832',
  },
};

export const argTypes = {
  href: {
    type: { name: 'string', required: false },
    description: 'Logo anchor',
    defaultValue: '#',
    control: { type: 'text' },
  },
  class: {
    type: { name: 'string', required: false },
    description: 'Custom classes to apply to the component',
    defaultValue: false,
    control: { type: 'text' },
  },
};
