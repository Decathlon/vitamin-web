import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/svelte';
import VtmnToastItem from '../VtmnToastItem.svelte';

describe('VtmnToastItem', () => {
  const getToast = (container) =>
    container.getElementsByClassName('vtmn-toast')[0];
  const getCloseButton = (container) =>
    container.getElementsByClassName('vtmn-btn')[0];

  const expectedCancelOnElement = async (
    element,
    component,
    expectedClickCount,
  ) => {
    const handleClick = jest.fn();
    component.$on('close', handleClick);
    await fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(expectedClickCount);
  };

  // Doit être affiché avec une classe vtmn-toast et show
  test("Should be visible with a class 'vtmn-toast' and 'show'", () => {
    const { container } = render(VtmnToastItem, { content: 'Unit-test Toast' });
    expect(getToast(container)).toHaveClass('vtmn-toast', 'show');
  });
  // Si on lui donne un content, celui-ci doit être affiché dans le toast
  test('Should display the content of the toast', () => {
    const { getByText } = render(VtmnToastItem, { content: 'Unit-test Toast' });
    expect(getByText('Unit-test Toast')).toBeVisible();
  });
  // par défaut il n'y a pas d'icon (vtmn-toast--with-icon-info) sur l'élément base
  test('Should not have a icon info by default', () => {
    const { container } = render(VtmnToastItem, { content: 'Unit-test Toast' });
    expect(getToast(container)).not.toHaveClass('vtmn-toast--with-icon-info');
  });
  // si withIcon alors la class 'vtmn-toast--with-icon-info' doit être présente
  test('Should have a icon info if withIcon = true', () => {
    const { container } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      withIcon: true,
    });
    expect(getToast(container)).toHaveClass('vtmn-toast--with-icon-info');
  });
  // il ne doit pas y avoir de bouton 'Close alert'
  test('Should not have a close button by default', () => {
    const { container } = render(VtmnToastItem, { content: 'Unit-test Toast' });
    expect(getCloseButton(container)).toBeUndefined();
  });
  // Si withCloseButton est présent, il doit y avoir un bouton
  test('Should have a close button if withCloseButton = true', () => {
    const { getByLabelText } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      withCloseButton: true,
    });
    expect(getByLabelText('Close alert')).toBeVisible();
  });
  // Si on click sur le bouton close, un évènement close doit se déclancher
  test('Should trigger event close if you click on the close button', async () => {
    const { getByLabelText, component } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      withCloseButton: true,
    });
    await expectedCancelOnElement(getByLabelText('Close alert'), component, 1);
  });
});
