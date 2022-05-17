import { writable } from 'svelte/store';
import { uuid } from '../../../utils/math';

class VtmnAlertStore {
  constructor() {
    this._alerts = writable([]);
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
        id: `vtmn-alert-${uuid()}`,
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
