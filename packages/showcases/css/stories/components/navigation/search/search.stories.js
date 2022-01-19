import overview from './examples/overview.html';
import _default from './examples/default.html';
import persistent from './examples/persistent.html';
import onContent from './examples/on-content.html';

export default {
  title: 'Components / Navigation / Search',
  argTypes: { onchange: { action: 'write' } },
};

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
  backgrounds: { default: 'primary' },
};

export const Default = () => _default;
Default.parameters = {
  docs: {
    source: {
      code: _default,
    },
  },
};

export const Persistent = () => persistent;
Persistent.parameters = {
  docs: {
    source: {
      code: persistent,
    },
  },
  backgrounds: { default: 'primary' },
};

export const OnContent = () => onContent;
OnContent.parameters = {
  docs: {
    source: {
      code: onContent,
    },
  },
  backgrounds: { default: 'primary' },
};
