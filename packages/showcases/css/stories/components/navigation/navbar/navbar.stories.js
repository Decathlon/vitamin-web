import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/navigation/navbar.csf';

export default {
  title: 'Components / Navigation / Navbar',
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
