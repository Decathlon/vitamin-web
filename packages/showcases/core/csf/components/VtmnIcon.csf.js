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
    description: 'The color of the icon.',
    defaultValue: 'black',
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
};

export const parameters = {
  backgrounds: { default: 'grey' },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ujn50nNMfGKzZJccATv7Vk/Vtmn-Vitamix-Icons?node-id=0%3A1',
  },
};
