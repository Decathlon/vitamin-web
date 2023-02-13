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
  label: {
    type: { name: 'string', required: true },
    description:
      'Label of the navbar link. Mandatory even if label is not shown for screen readers.',
    control: { type: 'text' },
  },
  showLabel: {
    type: { name: 'boolean', required: true },
    description: 'Displays the label of the navbar link.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'true' },
    },
    defaultValue: true,
    control: { type: 'boolean' },
  },
};
