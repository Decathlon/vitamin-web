import overview from './examples/overview.html';
import { default as top } from './examples/top-image.html';
import { default as side } from './examples/side-image.html';
import { default as full } from './examples/full-image.html';

export default {
  title: 'Components / Card ',
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

export const Top = () => top;
Top.parameters = {
  docs: {
    source: {
      code: top,
    },
  },
};

export const Side = () => side;
Side.parameters = {
  docs: {
    source: {
      code: side,
    },
  },
};

export const Full = () => full;
Full.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};
