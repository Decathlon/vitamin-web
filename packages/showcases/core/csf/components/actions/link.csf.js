export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=1207%3A8900',
  },
};

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
  rel: {
    type: { name: 'string', required: false },
    description: 'The rel attribute of the link.',
    defaultValue: '',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: '' },
    },
    control: {
      type: 'text',
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
    description: 'Whether the component is standalone or not.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    defaultValue: false,
    control: { type: 'boolean' },
  },
  reversed: {
    type: { name: 'boolean', required: false },
    description: 'Whether the component is reversed or not.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    defaultValue: false,
    control: { type: 'boolean' },
  },
  iconAlong: {
    type: { name: 'boolean', required: false },
    description: 'Whether the component has an icon. Only if standalone.',
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
