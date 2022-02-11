import overview from './examples/overview.html';
import horizontal from './examples/horizontal.html';
import vertical from './examples/vertical.html';

import { parameters } from '@vtmn/showcase-core/csf/components/structure/divider.csf';

export default {
  title: 'Components / Structure / Divider',
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

export const Horizontal = () => horizontal;
Horizontal.parameters = {
  docs: {
    source: {
      code: horizontal,
    },
  },
};

export const Vertical = () => vertical;
Vertical.parameters = {
  docs: {
    source: {
      code: vertical,
    },
  },
};
