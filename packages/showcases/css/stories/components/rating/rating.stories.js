import overview from './examples/overview.html';
import small from './examples/small.html';
import medium from './examples/medium.html';

export default {
  title: 'Components / Rating ',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=1434%3A8532',
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

export const Small = () => small;
Small.parameters = {
  docs: {
    source: {
      code: small,
    },
  },
};
export const Medium = () => medium;
Medium.parameters = {
  docs: {
    source: {
      code: medium,
    },
  },
};
