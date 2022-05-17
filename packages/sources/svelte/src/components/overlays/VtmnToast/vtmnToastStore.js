import { writable } from 'svelte/store';
import { uuid } from '../../../utils/math';

class VtmnToastStore {
  constructor() {
    this._toasts = writable([]);
  }

  send({ content, withCloseButton, withIcon }) {
    this._toasts.update((state) => [
      ...state,
      { content, withCloseButton, withIcon, id: `vtmn-toast-${uuid()}` },
    ]);
  }

  close(toastId) {
    this._toasts.update((n) => {
      return n.filter((i) => i.id !== toastId);
    });
  }

  subscribe(run) {
    return this._toasts.subscribe(run);
  }
}

export const vtmnToastStore = new VtmnToastStore();
