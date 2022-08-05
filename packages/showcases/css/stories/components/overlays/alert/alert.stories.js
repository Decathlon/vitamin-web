import overview from './examples/overview.html';
import demo from './examples/demo.html';

import { parameters } from '@vtmn/showcase-core/csf/components/overlays/alert.csf';

export default {
  title: 'Components / Overlays / Alert',
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
};

export const Demo = () => demo;
Demo.parameters = {
  docs: {
    source: {
      code: demo,
    },
  },
};
