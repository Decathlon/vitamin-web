import overview from './examples/overview.html';
import small from './examples/small.html';
import medium from './examples/medium.html';
import large from './examples/large.html';
import { parameters } from '@vtmn/showcase-core/csf/components/actions/link.csf';

export default {
  title: 'Components / Actions / Link ',
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

export const Large = () => large;
Large.parameters = {
  docs: {
    source: {
      code: large,
    },
  },
};
