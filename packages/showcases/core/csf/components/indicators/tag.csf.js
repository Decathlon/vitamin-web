import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export const parameters = {
  actions: {
    handles: ['mouseenter', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=7492%3A18228',
  },
};

export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the tag.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'default' },
    },
    defaultValue: 'accent',
    control: {
      type: 'select',
      options: [
        'accent',
        'alert',
        'brand',
        'decorative_gravel',
        'decorative_brick',
        'decorative_saffron',
        'decorative_gold',
        'decorative_jade',
        'decorative_emerald',
        'decorative_cobalt',
        'decorative_amethyst',
      ],
    },
  },
  href: {
    type: { name: 'string', required: false },
    description: 'The href that makes the tag interactive.',
    table: {
      type: {
        summary: 'string',
      },
    },
    control: { type: 'text' },
  },
  icon: {
    type: { name: 'string', required: false },
    description: 'The start icon of the tag.',
    defaultValue: 'leaf-fill',
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
};
