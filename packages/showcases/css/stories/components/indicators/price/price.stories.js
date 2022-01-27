import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/indicators/price.csf';

export default {
  title: 'Components / Indicators / Price',
  argTypes: { onclick: { action: 'clicked' } },
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
