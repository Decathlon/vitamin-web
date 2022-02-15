import { withRunScript } from 'storybook-addon-run-script/html';
import linearScript from './examples/circular.runscript';
import circularScript from './examples/linear.runscript';
import overview from './examples/overview.html';
import linear from './examples/linear.html';
import circular from './examples/circular.html';

import { parameters } from '@vtmn/showcase-core/csf/components/indicators/progressbar.csf';

export default {
  title: 'Components / Indicators / Progressbar',
  argTypes: { onchange: { action: 'write' } },
  parameters,
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
