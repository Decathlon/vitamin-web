import _selected from './examples/selected.html';
import _unselected from './examples/unselected.html';
import _disabled from './examples/disabled.html';

export default {
  title: 'Components / Toggle ',
  argTypes: { onchange: { action: 'write' } },
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn---Web?node-id=287%3A0',
    },
  },
};

export const Selected = () => _selected;
Selected.parameters = {
  docs: {
    source: {
      code: _selected,
    },
  },
};

export const Unselected = () => _unselected;
Unselected.parameters = {
  docs: {
    source: {
      code: _unselected,
    },
  },
};

export const Disabled = () => _disabled;
Disabled.parameters = {
  docs: {
    source: {
      code: _disabled,
    },
  },
};
