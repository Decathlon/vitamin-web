import overview from './examples/overview.html';
import interactive from './examples/interactive.html';
import readOnly from './examples/read-only.html';

export default {
  title: 'Components / Indicators / Rating ',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=1434%3A8532',
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

export const Interactive = () => interactive;
Interactive.parameters = {
  docs: {
    source: {
      code: interactive,
    },
  },
};
export const ReadOnly = () => readOnly;
ReadOnly.parameters = {
  docs: {
    source: {
      code: readOnly,
    },
  },
};
