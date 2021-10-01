import { withRunScript } from 'storybook-addon-run-script/html';
import linearScript from './examples/circular.runscript';
import circularScript from './examples/linear.runscript';
import overview from './examples/overview.html';
import linear from './examples/linear.html';
import circular from './examples/circular.html';

export default {
  title: 'Components / Progressbar',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin---Web-UI-kit-(v0)?node-id=2887%3A11057',
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
Linear.decorators = [withRunScript(linearScript)];
Linear.parameters = {
  docs: {
    source: {
      code: linear,
    },
  },
  backgrounds: { default: 'primary' },
};

export const Circular = () => circular;
Circular.decorators = [withRunScript(circularScript)];
Circular.parameters = {
  docs: {
    source: {
      code: circular,
    },
  },
  backgrounds: { default: 'primary' },
};
