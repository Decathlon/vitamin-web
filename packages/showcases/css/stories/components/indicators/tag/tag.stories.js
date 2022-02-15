import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/indicators/tag.csf';

export default {
  title: 'Components / Indicators / Tag ',
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
