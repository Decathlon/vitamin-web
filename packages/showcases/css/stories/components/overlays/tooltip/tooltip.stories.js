import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/overlays/tooltip.csf';

export default {
  title: 'Components / Overlays / Tooltip',
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
