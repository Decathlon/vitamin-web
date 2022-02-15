import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/selection-controls/radio-button.csf';

export default {
  title: 'Components / Selection controls / Radio button',
  argTypes: { onChange: { action: 'write' } },
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
