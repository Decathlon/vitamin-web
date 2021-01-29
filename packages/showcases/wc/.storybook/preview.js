import { defineCustomElements } from '@decathlon/vitamin-wc-button/dist/esm/loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
