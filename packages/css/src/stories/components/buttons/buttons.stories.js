import _default from './examples/default.html';
import primary from './examples/primary.html';
import primaryReversed from './examples/primary-reversed.html';
import secondary from './examples/secondary.html';
import secondaryReversed from './examples/secondary-reversed.html';
import ghost from './examples/ghost.html';
import conversion from './examples/conversion.html';

export default {
  title: 'Components / Buttons',
};

export const Default = () => _default;
Default.parameters = {
  docs: {
    source: {
      code: _default,
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
