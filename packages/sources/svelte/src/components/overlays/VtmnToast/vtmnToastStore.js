import { writable } from 'svelte/store';

class VtmnToastStore {
  constructor() {
    this._toasts = writable([]);
    this._id = 0;
  }

  get newId() {
    this._id++;
    return this._id;
  }

  send({ content, withCloseButton, withIcon }) {
    this._toasts.update((state) => [
      ...state,
      { content, withCloseButton, withIcon, id: this.newId },
    ]);
  }

  close(toastId) {
    this._toasts.update((n) => {
      const removedToast = n.filter((i) => i.id !== toastId);
      return removedToast;
    });
  }

  subscribe(run) {
    return this._toasts.subscribe(run);
  }
}

export const vtmnToastStore = new VtmnToastStore();
