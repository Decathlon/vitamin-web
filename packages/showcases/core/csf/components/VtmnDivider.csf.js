export const argTypes = {
  orientation: {
    type: { name: 'string', required: false },
    description: 'The orientation of the divider.',
    defaultValue: 'horizontal',
    control: {
      type: 'text',
    },
  },
  textPosition: {
    type: { name: 'string', required: false },
    description: 'The position of the text inside the divider.',
    defaultValue: 'start',
    control: {
      type: 'text',
    },
  },
  children: {
    type: { name: 'string', required: false },
    description: 'The content to render inside the component',
    defaultValue: 'My Label',
    control: {
      type: 'text',
    },
  },
};

export const parameters = {
  actions: {
    handles: ['mouseenter', 'click', 'focusin', 'focusout'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=6871%3A13107',
  },
};
