import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=1866%3A31',
  },
};

export const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the button.',
    defaultValue: 'primary',
    control: {
      type: 'select',
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
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large', 'stretched'],
    },
  },
  type: {
    type: { name: 'string', required: false },
    description: 'The type of the button.',
    defaultValue: 'button',
    control: {
      type: 'select',
      options: ['button', 'submit'],
    },
  },
  isDisabled: {
    type: { name: 'boolean', required: false },
    description: 'Whether the button is disabled.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: 'false' },
    },
    defaultValue: false,
    control: { type: 'boolean' },
  },
  iconLeft: {
    type: { name: 'string', required: false },
    description: 'The icon to display on the left hand side of button.',
    defaultValue: null,
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
  iconRight: {
    type: { name: 'string', required: false },
    description: 'The icon to display on the right hand side of button.',
    defaultValue: null,
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
  iconAlone: {
    type: { name: 'string', required: false },
    description: 'The to display when it is a button with icon only.',
    defaultValue: null,
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },
};
