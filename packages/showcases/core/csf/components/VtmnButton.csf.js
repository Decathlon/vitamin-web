import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the button.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'primary' },
    },
    defaultValue: 'primary',
    control: {
      type: 'radio',
      options: [
        'primary',
        'primary-reversed',
        'secondary',
        'tertiary',
        'ghost',
        'ghost-reversed',
        'conversion',
      ],
    },
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the button.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'medium' },
    },
    defaultValue: 'medium',
    control: {
      type: 'radio',
      options: ['small', 'medium', 'large', 'stretched'],
    },
  },
  label: {
    type: { name: 'string', required: false },
    description: 'The text label in the the button.',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: { summary: 'Button' },
    },
    defaultValue: 'Button',
    control: {
      type: 'text',
    },
  },
  iconLeft: {
    type: { name: 'string', required: false },
    description: 'The icon to display on the left hand side of button.',
    table: {
      type: {
        summary: 'VitamixId',
      },
      defaultValue: { summary: 'undefined' },
    },
    defaultValue: undefined,
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
  iconRight: {
    type: { name: 'string', required: false },
    description: 'The icon to display on the right hand side of button.',
    table: {
      type: {
        summary: 'VitamixId',
      },
      defaultValue: { summary: 'undefined' },
    },
    defaultValue: undefined,
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
  iconAlone: {
    type: { name: 'string', required: false },
    description: 'The icon to display when it is a button with icon only.',
    table: {
      type: {
        summary: 'VitamixId',
      },
      defaultValue: { summary: 'undefined' },
    },
    defaultValue: undefined,
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=31%3A136',
  },
};
