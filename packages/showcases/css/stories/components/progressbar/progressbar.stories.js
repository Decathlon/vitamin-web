import overview from './examples/overview.html';
import linear from './examples/linear.html';
import circle from './examples/circle.html';

export default {
  title: 'Components / Progressbar',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=2887%3A11057',
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
  backgrounds: { default: 'primary' },
};

export const Linear = () => linear;
Linear.parameters = {
  docs: {
    source: {
      code: linear,
    },
  },
  backgrounds: { default: 'primary' },
};

export const Circle = () => circle;
Circle.parameters = {
  docs: {
    source: {
      code: circle,
    },
  },
  backgrounds: { default: 'primary' },
};
