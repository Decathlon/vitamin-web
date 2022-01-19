import overview from './examples/overview.html';

export default {
  title: 'Components / Indicators / Tag ',
  argTypes: { onchange: { action: 'write' } },
};

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};
