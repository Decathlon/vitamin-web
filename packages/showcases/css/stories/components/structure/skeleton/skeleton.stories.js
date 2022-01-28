import overview from './examples/overview.html';

import { parameters } from '@vtmn/showcase-core/csf/components/structure/skeleton.csf';

export default {
  title: 'Components / Structure / Skeleton',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vitamin-Web-UI-kit-v0?node-id=3451%3A10738',
    },
  },
};

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};
