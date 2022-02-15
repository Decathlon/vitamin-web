import overview from './examples/overview.html';
import interactive from './examples/interactive.html';
import readOnly from './examples/read-only.html';

import { parameters } from '@vtmn/showcase-core/csf/components/indicators/rating.csf';

export default {
  title: 'Components / Indicators / Rating ',
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
