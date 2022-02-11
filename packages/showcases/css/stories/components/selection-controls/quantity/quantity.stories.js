import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/selection-controls/quantity.csf';

export default {
  title: 'Components / Selection controls / Quantity',
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
