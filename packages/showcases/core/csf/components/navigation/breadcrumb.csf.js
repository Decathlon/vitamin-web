export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=6063%3A13272',
  },
};

export const argTypes = {
  item: {
    type: { name: 'string', required: true },
    description: 'Item default',
    defaultValue: 'Home',
    control: { type: 'text' },
  },
  icon: {
    type: { name: 'string', required: false },
    description: 'The icon of item.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'default' },
    },
    defaultValue: 'vtmx-home-line',
    control: {
      type: 'select',
      options: [
        'vtmx-home-line',
        'vtmx-store-line',
        'vtmx-gift-line',
        'vtmx-user-line',
        'vtmx-t-shirt-line',
      ],
    },
  },
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
};
