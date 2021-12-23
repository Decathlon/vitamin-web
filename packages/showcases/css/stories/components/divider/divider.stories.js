import overview from './examples/overview.html';
import horizontal from './examples/horizontal.html';
import vertical from './examples/vertical.html';

export default {
  title: 'Components / Divider',
  argTypes: { onclick: { action: 'clicked' } },
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
