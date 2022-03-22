import { writable } from 'svelte/store';

class VtmnSnackbarStore {
  constructor() {
    this._snackbar = writable([]);
    this._id = 0;
  }

  get newId() {
    return ++this._id;
  }

  send({ content, withCloseButton, action }) {
    this._snackbar.set([{ content, withCloseButton, action, id: this.newId }]);
  }

  close() {
    this._snackbar.set([]);
  }

  subscribe(run) {
    return this._snackbar.subscribe(run);
  }
}

export const vtmnSnackbarStore = new VtmnSnackbarStore();
