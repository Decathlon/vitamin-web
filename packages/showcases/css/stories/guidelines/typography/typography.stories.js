import _default from './examples/default.html';
import displays from './examples/displays.html';
import headings from './examples/headings.html';
import bodyText from './examples/body-text.html';

export default {
  title: 'Guidelines / Typography',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=0%3A1',
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

export const Displays = () => displays;
Displays.parameters = {
  docs: {
    source: {
      code: displays,
    },
  },
};

export const Headings = () => headings;
Headings.parameters = {
  docs: {
    source: {
      code: headings,
    },
  },
};

export const BodyText = () => bodyText;
BodyText.parameters = {
  docs: {
    source: {
      code: bodyText,
    },
  },
};
