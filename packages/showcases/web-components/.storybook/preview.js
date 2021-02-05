import '@vtmn/css';
import { defineCustomElements } from '@vtmn/web-components/dist/esm/loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
