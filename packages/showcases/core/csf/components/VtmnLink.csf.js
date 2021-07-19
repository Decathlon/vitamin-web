export const argTypes = {
  href: {
    type: { name: 'string', required: true },
    description: 'The href of the link.',
    defaultValue: '#',
    control: { type: 'text' },
  },
  target: {
    type: { name: 'string', required: false },
    description: 'The target of the link.',
    defaultValue: '_self',
    control: {
      type: 'text',
    },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the link.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  standalone: {
    type: { name: 'boolean', required: false },
    description: 'If the component is a standalone or not.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  iconAlong: {
    type: { name: 'boolean', required: false },
    description: 'If the component has an icon or not.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
};

export const parameters = {
  backgrounds: { default: 'grey' },
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=1207%3A8898',
  },
};
