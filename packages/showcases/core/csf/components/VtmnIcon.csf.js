import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export const argTypes = {
  size: {
    type: { name: 'number', required: false },
    description: 'The size of the icon in pixels.',
    defaultValue: 24,
    control: {
      type: 'select',
      options: [16, 24, 32, 64],
    },
  },
  color: {
    type: { name: 'string', required: false },
    description:
      'The color of the icon. (DEPRECATED - Use "variant" prop instead).',
    control: {
      type: 'select',
      options: [
        'black',
        'brand-digital',
        'white',
        'success',
        'info',
        'warning',
        'danger',
      ],
    },
  },
  value: {
    type: { name: 'string', required: true },
    description: 'The value of the icon.',
    defaultValue: 'home-fill',
    control: {
      type: 'select',
      options: Object.keys(vitamixIconsList),
    },
  },
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the icon.',
    defaultValue: 'default',
    control: {
      type: 'select',
      options: [
        'default',
        'brand',
        'reversed',
        'positive',
        'information',
        'warning',
        'negative',
      ],
    },
  },
};

export const parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ujn50nNMfGKzZJccATv7Vk/?node-id=0%3A1',
  },
};
