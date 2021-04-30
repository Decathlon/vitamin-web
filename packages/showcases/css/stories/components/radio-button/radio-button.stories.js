import disabled from './examples/disabled.html';
import selected from './examples/selected.html';
import _default from './examples/_default.html';

export default {
  title: 'Components / Radio button',
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

export const Default = () => _default;
Default.parameters = {
  docs: {
    source: {
      code: _default,
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
