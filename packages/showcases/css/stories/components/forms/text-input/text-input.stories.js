import overview from './examples/overview.html';
import valid from './examples/valid.html';
import error from './examples/error.html';
import disabled from './examples/disabled.html';
import multiline from './examples/multiline.html';
import { parameters } from '@vtmn/showcase-core/csf/components/forms/text-input.csf';

export default {
  title: 'Components / Forms / Text input',
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

export const Valid = () => valid;
Valid.parameters = {
  docs: {
    source: {
      code: valid,
    },
  },
};

export const Error = () => error;
Error.parameters = {
  docs: {
    source: {
      code: error,
    },
  },
};

export const Disabled = () => disabled;
Disabled.parameters = {
  docs: {
    source: {
      code: disabled,
    },
  },
};

export const Multiline = () => multiline;
Multiline.parameters = {
  docs: {
    source: {
      code: multiline,
    },
  },
};
