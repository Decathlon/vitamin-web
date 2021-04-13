import disabled from './examples/disabled.html';
import selected from './examples/selected.html';
import unselected from './examples/unselected.html';

export default {
  title: 'Components / Radio Button',
  argTypes: { onChange: { action: 'write' } },
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

export const Selected = () => selected;
Selected.parameters = {
  docs: {
    source: {
      code: selected,
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

export const Unselected = () => unselected;
Unselected.parameters = {
  docs: {
    source: {
      code: unslected,
    },
  },
};
