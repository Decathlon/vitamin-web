import vitamixIconsList from '@vtmn/icons/dist/vitamix/font/vitamix.json';

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=4652%3A11424',
  },
};

export const argTypes = {
  onClick: {
    type: { name: 'string', required: false },
    description: 'Called when clicking the chip',
    control: {
      type: 'function',
    },
  },

  onCancel: {
    type: { name: 'string', required: false },
    description: 'Called when the cross is clicked when using input variant',
    control: {
      type: 'function',
    },
  },

  variant: {
    type: { name: 'string', required: false },
    description: 'The variant of the chip.',
    defaultValue: 'single-choice',
    control: {
      type: 'select',
      options: ['single-choice', 'input', 'filter', 'action'],
    },
  },

  size: {
    type: { name: 'string', required: false },
    description: 'The size of the chip.',
    defaultValue: 'medium',
    control: {
      type: 'select',
      options: ['small', 'medium'],
    },
  },

  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the chip',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },

  selected: {
    type: { name: 'boolean', required: false },
    description: 'The selected state of the chip',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },

  icon: {
    type: { name: 'string', required: false },
    description:
      'The icon to display on the left side of the chip. Only for `input` variant',
    defaultValue: null,
    control: {
      type: 'select',
      options: ['', ...Object.keys(vitamixIconsList)],
    },
  },

  badgeValue: {
    type: { name: 'number', required: false },
    description: 'The value in the badge. Only for `filter` variant',
    defaultValue: 0,
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: { summary: 0 },
    },
    control: { type: 'range', min: 0, max: 100 },
  },
};
