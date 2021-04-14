import _default from './examples/default.html';
import _small from './examples/small.html';
import _medium from './examples/medium.html';
import _large from './examples/large.html';

export default {
  title: 'Components / Link ',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=1207%3A8898',
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

export const Small = () => _small;
Default.parameters = {
  docs: {
    source: {
      code: _small,
    },
  },
};

export const Medium = () => _medium;
Default.parameters = {
  docs: {
    source: {
      code: _medium,
    },
  },
};

export const Large = () => _large;
Default.parameters = {
  docs: {
    source: {
      code: _large,
    },
  },
};
