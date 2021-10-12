import { withRunScript } from 'storybook-addon-run-script/html';
import demoScript from './examples/demo.runscript';
import overview from './examples/overview.html';
import demo from './examples/demo.html';

export default {
  title: 'Components / Toast',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=2790%3A10831',
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
Demo.decorators = [withRunScript(demoScript)];
Demo.parameters = {
  docs: {
    source: {
      code: demo,
    },
  },
};
