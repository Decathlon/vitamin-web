import _default from './examples/default.html';
import _valid from './examples/valid.html';
import _error from './examples/error.html';
import _disabled from './examples/disabled.html';
import _multiline from './examples/multiline.html';

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

export const Valid = () => _valid;
Valid.parameters = {
  docs: {
    source: {
      code: _valid,
    },
  },
};

export const Error = () => _error;
Error.parameters = {
  docs: {
    source: {
      code: _error,
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

export const Multiline = () => _multiline;
Multiline.parameters = {
  docs: {
    source: {
      code: _multiline,
    },
  },
};
