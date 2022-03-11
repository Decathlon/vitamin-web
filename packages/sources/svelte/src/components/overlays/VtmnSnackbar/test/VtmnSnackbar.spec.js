import '@testing-library/jest-dom';

import { fireEvent, render, waitFor } from '@testing-library/svelte';

import VtmnSnackbar from '../VtmnSnackbar.svelte';
import VtmnSnackbarWithSlots from './VtmnSnackbarWithSlots.svelte';

describe('VtmnSnackbar', () => {
  const getSnackbar = (container) =>
    container.getElementsByClassName('vtmn-snackbar')[0];
  describe('show = false', () => {
    test('Should have no content', () => {
      const { container } = render(VtmnSnackbar, {
        show: false,
        content: 'Unit-test',
      });
      expect(getSnackbar(container)).toBeUndefined();
    });
  });

  describe('show = true', () => {
    test("Should have a snackbar with class 'vtmn-snackbar' and 'show'", () => {
      const { container } = render(VtmnSnackbar, {
        show: true,
        content: 'Unit-test',
      });
      expect(getSnackbar(container)).toBeVisible();
      expect(getSnackbar(container)).toHaveClass('show');
    });
    test('Should apply custom class to snackbar', () => {
      const { container } = render(VtmnSnackbar, {
        show: true,
        content: 'Unit-test',
        class: 'custom-class',
      });
      expect(getSnackbar(container)).toHaveClass('custom-class');
    });
    test('Should display the content on the snackbar', () => {
      const { getByText } = render(VtmnSnackbar, {
        show: true,
        content: 'Unit-test',
      });
      expect(getByText('Unit-test')).toBeVisible();
      expect(getByText('Unit-test')).toHaveClass('vtmn-snackbar_content');
    });
    test('Should disappear after the timeout expire', async () => {
      const { container } = render(VtmnSnackbar, {
        show: true,
        content: 'Unit-test',
        timeout: 100,
      });
      await waitFor(() => expect(getSnackbar(container)).toBeUndefined(), {
        timeout: 200,
      });
    });
    test('Should disappear after the timeout expire', async () => {
      const { container } = render(VtmnSnackbar, {
        show: true,
        content: 'Unit-test',
        timeout: 100,
      });
      await waitFor(() => expect(getSnackbar(container)).toBeUndefined(), {
        timeout: 200,
      });
    });
    test('Should trigger event on click button', async () => {
      const { getByLabelText } = render(VtmnSnackbar, {
        show: true,
        content: 'Unit-test',
        displayCloseButton: true,
      });
      expect(getByLabelText('Close alert')).toBeVisible();
      expect(getByLabelText('Close alert')).toHaveClass('vtmn-btn');
    });
    test('Should trigger event on click button', async () => {
      const { getByLabelText, container } = render(VtmnSnackbar, {
        show: true,
        content: 'Unit-test',
        displayCloseButton: true,
      });
      await fireEvent.click(getByLabelText('Close alert'));
      expect(getSnackbar(container)).toBeUndefined();
    });

    test('Should show the slot', () => {
      const { getByText } = render(VtmnSnackbarWithSlots, {
        show: true,
        content: 'Unit-test',
      });
      expect(getByText('Action')).toBeVisible();
    });
  });
});
