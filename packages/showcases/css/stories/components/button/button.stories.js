import overview from './examples/overview.html';
import primary from './examples/primary.html';
import primaryReversed from './examples/primary-reversed.html';
import secondary from './examples/secondary.html';
import secondaryReversed from './examples/secondary-reversed.html';
import ghost from './examples/ghost.html';
import conversion from './examples/conversion.html';
import withIcon from './examples/with-icon.html';

export default {
  title: 'Components / Button',
  argTypes: { onclick: { action: 'clicked' } },
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

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};

export const Primary = () => primary;
Primary.parameters = {
  docs: {
    source: {
      code: primary,
    },
  },
};

export const PrimaryReversed = () => primaryReversed;
PrimaryReversed.parameters = {
  docs: {
    source: {
      code: primaryReversed,
    },
  },
  backgrounds: { default: 'blue' },
};

export const Secondary = () => secondary;
Secondary.parameters = {
  docs: {
    source: {
      code: secondary,
    },
  },
};

export const SecondaryReversed = () => secondaryReversed;
SecondaryReversed.parameters = {
  docs: {
    source: {
      code: secondaryReversed,
    },
  },
  backgrounds: { default: 'blue' },
};

export const Ghost = () => ghost;
Ghost.parameters = {
  docs: {
    source: {
      code: ghost,
    },
  },
};

export const Conversion = () => conversion;
Conversion.parameters = {
  docs: {
    source: {
      code: conversion,
    },
  },
};
