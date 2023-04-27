import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export const parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=10847%3A27832',
  },
};

export const argTypes = {
  icon: {
    type: { name: 'string', required: true },
    description: 'Icon of the navbar link.',
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
};
