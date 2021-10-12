import overview from './examples/overview.html';
import error from './examples/error.html';
import disabled from './examples/disabled.html';

export default {
  title: 'Components / Select',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=2535%3A52',
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
