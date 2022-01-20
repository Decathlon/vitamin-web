import overview from './examples/overview.html';

export default {
  title: 'Components / Selection controls / Quantity',
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
