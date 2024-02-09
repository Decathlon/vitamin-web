import { writable } from 'svelte/store';
import { uuid } from '../../../utils/math';

class VtmnSnackbarStore {
  constructor() {
    this._snackbar = writable([]);
  }

  send({ content, withCloseButton, action, timeout }) {
    this._snackbar.set([
      {
        content,
        withCloseButton,
        action,
        timeout,
        id: `vtmn-snackbar-${uuid()}`,
      },
    ]);
  }

  close() {
    this._snackbar.set([]);
  }

  subscribe(run) {
    return this._snackbar.subscribe(run);
  }
}

export const vtmnSnackbarStore = new VtmnSnackbarStore();
