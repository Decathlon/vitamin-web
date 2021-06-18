import normal from './examples/normal.html';
import hide from './examples/hide.html';

export default {
  title: 'Components / Badge',
  parameters: {
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=31%3A136',
    },
  },
};

export const Normal = () => normal;
Normal.parameters = {
  docs: {
    source: {
      code: normal,
    },
  },
};

export const Hide = () => hide;
Hide.parameters = {
  docs: {
    source: {
      code: hide,
    },
  },
};
