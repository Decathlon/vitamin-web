import _default from './examples/default.html';

export default {
  title: 'Components / Text input',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=150%3A3410',
    },
  },
};

export const Default = () => _default;
Default.parameters = {
  docs: {
    source: {
      code: _default,
    },
  },
};
