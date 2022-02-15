import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/actions/dropdown.csf';

export default {
  title: 'Components / Actions / Dropdown',
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
