import { VtmnIconVariant } from './types';

export const retrieveSemanticColor = (iconVariant: VtmnIconVariant) => {
  switch (iconVariant) {
    case 'default':
      return 'content-primary';
    case 'brand':
      return 'background-brand-primary';
    case 'reversed':
      return 'content-primary-reversed';
    default:
      return `content-${iconVariant}`;
  }
};
