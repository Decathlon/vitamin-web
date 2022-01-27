import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/structure/accordion.csf';

export default {
  title: 'Components / Structure / Accordion ',
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
