import overview from './examples/overview.html';
import demo from './examples/demo.html';

export default {
  title: 'Components / Snackbar',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=2796%3A12600',
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

export const Demo = () => demo;
Demo.parameters = {
  docs: {
    source: {
      code: demo,
    },
  },
};
