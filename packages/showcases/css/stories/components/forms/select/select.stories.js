import overview from './examples/overview.html';
import error from './examples/error.html';
import disabled from './examples/disabled.html';

import { parameters } from '@vtmn/showcase-core/csf/components/forms/select.csf';

export default {
  title: 'Components / Forms / Select',
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
