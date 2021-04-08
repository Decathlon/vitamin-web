import _default from './examples/default.html';
import _disabled from './examples/disabled.html';

export default {
  title: 'Components / Toggle ',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=287%3A0',
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

export const Disabled = () => _disabled;
Disabled.parameters = {
  docs: {
    source: {
      code: _disabled,
    },
  },
};
