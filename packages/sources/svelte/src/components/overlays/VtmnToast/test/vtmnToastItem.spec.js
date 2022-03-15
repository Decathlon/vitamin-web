import '@testing-library/jest-dom';

import { fireEvent, render, waitFor } from '@testing-library/svelte';
import VtmnToastItem from '../VtmnToastItem.svelte';

const timeout = 5000;

describe('VtmnToastItem', () => {
  const getToast = (container) =>
    container.getElementsByClassName('vtmn-toast')[0];
  const getCloseButton = (container) =>
    container.getElementsByClassName('vtmn-btn')[0];

  const expectedCloseOnElement = async (
    element,
    component,
    expectedClickCount,
  ) => {
    const handleClick = jest.fn();
    component.$on('close', handleClick);
    await fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(expectedClickCount);
  };

  test("Should be visible with a class 'vtmn-toast' and 'show'", () => {
    const { container } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      timeout,
    });
    expect(getToast(container)).toBeVisible();
    expect(getToast(container)).toHaveClass('vtmn-toast', 'show');
  });
  test('Should pass custom class to the toast', () => {
    const { container } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      class: 'custom-class',
      timeout,
    });
    expect(getToast(container)).toHaveClass('custom-class');
  });
  test('Should display the content of the toast', () => {
    const { getByText } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      timeout,
    });
    expect(getByText('Unit-test Toast')).toBeVisible();
  });
  test('Should not have a icon info by default', () => {
    const { container } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      timeout,
    });
    expect(getToast(container)).not.toHaveClass('vtmn-toast--with-icon-info');
  });
  test('Should have a icon info if withIcon = true', () => {
    const { container } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      withIcon: true,
      timeout,
    });
    expect(getToast(container)).toHaveClass('vtmn-toast--with-icon-info');
  });
  test('Should not have a close button by default', () => {
    const { container } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      timeout,
    });
    expect(getCloseButton(container)).toBeUndefined();
  });
  test('Should have a close button if withCloseButton = true', () => {
    const { getByLabelText } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      withCloseButton: true,
      timeout,
    });
    expect(getByLabelText('Close alert')).toBeVisible();
  });
  test('Should trigger event close if you click on the close button', async () => {
    const { getByLabelText, component } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      withCloseButton: true,
      timeout,
    });
    await expectedCloseOnElement(getByLabelText('Close alert'), component, 1);
  });
  test('Should trigger event close after the timeout expire', async () => {
    const handleClick = jest.fn();
    const { component } = render(VtmnToastItem, {
      content: 'Unit-test Toast',
      timeout: 50,
    });
    component.$on('close', handleClick);
    expect(handleClick).toHaveBeenCalledTimes(0);
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1), {
      timeout: 100,
    });
  });
});
