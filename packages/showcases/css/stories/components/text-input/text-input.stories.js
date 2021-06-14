import overview from './examples/overview.html';
import valid from './examples/valid.html';
import error from './examples/error.html';
import disabled from './examples/disabled.html';
import multiline from './examples/multiline.html';

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

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};

export const Valid = () => valid;
Valid.parameters = {
  docs: {
    source: {
      code: valid,
    },
  },
};

export const Error = () => error;
Error.parameters = {
  docs: {
    source: {
      code: error,
    },
  },
};

export const Disabled = () => disabled;
Disabled.parameters = {
  docs: {
    source: {
      code: disabled,
    },
  },
};

export const Multiline = () => multiline;
Multiline.parameters = {
  docs: {
    source: {
      code: multiline,
    },
  },
};
