export const argTypes = {
  href: {
    type: { name: 'string', required: true },
    description: 'The href of the link.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: '#' },
    },
    defaultValue: '#',
    control: { type: 'text' },
  },
  target: {
    type: { name: 'string', required: false },
    description: 'The target of the link.',
    defaultValue: '_self',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: '_self' },
    },
    control: {
      type: 'radio',
      options: ['_self', '_blank', '_parent', '_top'],
    },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the link.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'medium' },
    },
    defaultValue: 'medium',
    control: {
      type: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
  standalone: {
    type: { name: 'boolean', required: false },
    description: 'Whether the component is standalone.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    defaultValue: false,
    control: { type: 'boolean' },
  },
  withIcon: {
    type: { name: 'boolean', required: false },
    description: 'Whether the component has an icon.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    defaultValue: false,
    control: { type: 'boolean' },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=1207%3A8898',
  },
};
