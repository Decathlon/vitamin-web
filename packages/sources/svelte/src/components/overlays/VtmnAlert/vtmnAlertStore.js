import { writable } from 'svelte/store';

class VtmnAlertStore {
  constructor() {
    this._alerts = writable([]);
    this._id = 0;
  }

  get newId() {
    return ++this._id;
  }

  send({ variant, title, description, withCloseButton, ...attributes }) {
    this._alerts.update((state) => [
      ...state,
      {
        ...attributes,
        variant,
        title,
        description,
        withCloseButton,
        id: this.newId,
      },
    ]);
  }

  close(alertId) {
    this._alerts.update((n) => {
      return n.filter((i) => i.id !== alertId);
    });
  }

  subscribe(run) {
    return this._alerts.subscribe(run);
  }
}

export const vtmnAlertStore = new VtmnAlertStore();
