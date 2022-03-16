import '@testing-library/jest-dom';

import { fireEvent, render, waitFor } from '@testing-library/svelte';

import VtmnSnackbarItem from '../VtmnSnackbarItem.svelte';

describe('VtmnSnackbar', () => {
  const timeout = 1000;
  const getSnackbar = (container) =>
    container.getElementsByClassName('vtmn-snackbar')[0];

  test("Should have a snackbar with class 'vtmn-snackbar' and 'show'", () => {
    const { container } = render(VtmnSnackbarItem, {
      content: 'Unit-test',
      timeout,
    });
    expect(getSnackbar(container)).toBeVisible();
    expect(getSnackbar(container)).toHaveClass('show');
  });

  test('Should apply custom class to snackbar', () => {
    const { container } = render(VtmnSnackbarItem, {
      content: 'Unit-test',
      class: 'custom-class',
      timeout,
    });
    expect(getSnackbar(container)).toHaveClass('custom-class');
  });
  test('Should display the content on the snackbar', () => {
    const { getByText } = render(VtmnSnackbarItem, {
      content: 'Unit-test',
      timeout,
    });
    expect(getByText('Unit-test')).toBeVisible();
    expect(getByText('Unit-test')).toHaveClass('vtmn-snackbar_content');
  });
  test('Should disappear after the timeout expire', async () => {
    const handleClick = jest.fn();
    const { component } = render(VtmnSnackbarItem, {
      content: 'Unit-test',
      timeout: 50,
    });
    component.$on('close', handleClick);
    expect(handleClick).toHaveBeenCalledTimes(0);
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1), {
      timeout: 100,
    });
  });
  test('Should trigger event on click button close', async () => {
    const handleClick = jest.fn();
    const { getByLabelText, component } = render(VtmnSnackbarItem, {
      content: 'Unit-test',
      withCloseButton: true,
      timeout,
    });
    component.$on('close', handleClick);
    expect(getByLabelText('Close alert')).toBeVisible();
    expect(getByLabelText('Close alert')).toHaveClass('vtmn-btn');
    await fireEvent.click(getByLabelText('Close alert'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Should trigger event on click button action', async () => {
    const handleClick = jest.fn();
    const { getByText, component } = render(VtmnSnackbarItem, {
      content: 'Unit-test',
      actionLabel: 'Action',
      timeout,
    });
    component.$on('action', handleClick);
    expect(getByText('Action')).toBeVisible();
    expect(getByText('Action')).toHaveClass('vtmn-btn');
    await fireEvent.click(getByText('Action'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
