import { writable } from 'svelte/store';

const createVtmnToastStore = () => {
  const { subscribe, update } = writable([]);

  const send = ({ content, timeout, withCloseButton, withIcon }) => {
    update((state) => {
      const timeoutId = setTimeout(() => {
        update((state) => {
          return [...state.filter((i) => i.timeoutId !== timeoutId)];
        });
        clearTimeout(timeoutId);
      }, timeout);
      return [
        ...state,
        { content, timeout, withCloseButton, withIcon, timeoutId, show: true },
      ];
    });
  };

  const close = (toast) => {
    update((state) => {
      clearTimeout(toast.timeoutId);
      return [...state.filter((i) => i.timeoutId !== toast.timeoutId)];
    });
  };

  return {
    subscribe,
    send,
    close,
  };
};

export const vtmnToastStore = createVtmnToastStore();
