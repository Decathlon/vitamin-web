import _default from './examples/default.html';
import displays from './examples/displays.html';
import headings from './examples/headings.html';
import bodyText from './examples/body-text.html';
import utilityClasses from './examples/utility-classes.html';

export default {
  title: 'Guidelines / Typography',
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

export const WithUtilityClasses = () => utilityClasses;
WithUtilityClasses.parameters = {
  docs: {
    source: {
      code: utilityClasses,
    },
  },
};
