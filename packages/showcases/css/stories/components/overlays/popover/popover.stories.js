import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/overlays/popover.csf';

export default {
  title: 'Components / Overlays / Popover',
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
