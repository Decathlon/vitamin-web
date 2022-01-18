import overview from './examples/overview.html';
import indeterminate from './examples/indeterminate.html';
import { parameters } from '@vtmn/showcase-core/csf/components/VtmnCheckbox.csf';

export default {
  title: 'Components / Selection controls / Checkbox ',
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

export const Indeterminate = () => indeterminate;
Indeterminate.parameters = {
  docs: {
    source: {
      code: indeterminate,
    },
  },
};
