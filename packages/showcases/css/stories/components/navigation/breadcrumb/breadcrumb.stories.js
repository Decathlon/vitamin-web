import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/navigation/breadcrumb.csf';

export default {
  title: 'Components / Navigation / Breadcrumb',
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
