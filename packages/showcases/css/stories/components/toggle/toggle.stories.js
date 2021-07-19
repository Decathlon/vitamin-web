import overview from './examples/overview.html';
import small from './examples/small.html';
import medium from './examples/medium.html';
import { parameters } from '@vtmn/showcase-core/csf/components/VtmnToggle.csf';

export default {
  title: 'Components / Toggle ',
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

export const Small = () => small;
Small.parameters = {
  docs: {
    source: {
      code: small,
    },
  },
};

export const Medium = () => medium;
Medium.parameters = {
  docs: {
    source: {
      code: medium,
    },
  },
};
