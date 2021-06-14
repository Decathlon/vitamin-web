import overview from './examples/overview.html';
import indeterminate from './examples/indeterminate.html';

export default {
  title: 'Components / Checkbox ',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/?node-id=783%3A9869',
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

export const Indeterminate = () => indeterminate;
Indeterminate.parameters = {
  docs: {
    source: {
      code: indeterminate,
    },
  },
};
