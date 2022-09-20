import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import VtmnPopover from './VtmnPopoverWithSlots.svelte';

describe('VtmnPopover', () => {
  const getPopover = (container) =>
    container.getElementsByClassName('vtmn-popover')[0];

  test('Should display the vtmn-popover with default position and id', () => {
    const { container, getByRole } = render(VtmnPopover, {
      id: 'unit-test-id',
    });
    expect(getPopover(container)).toHaveAttribute('data-position', 'top');
    expect(getPopover(container)).toHaveAttribute(
      'aria-describedby',
      'unit-test-id',
    );
    expect(getByRole('dialog')).toHaveAttribute('id', 'unit-test-id');
  });
  test('Should apply the position', () => {
    const { container } = render(VtmnPopover, {
      id: 'unit-test-id',
      position: 'top',
    });
    expect(getPopover(container)).toHaveAttribute('data-position', 'top');
  });
  test('Should apply custom class', () => {
    const { container } = render(VtmnPopover, {
      id: 'unit-test-id',
      class: 'custom-class',
    });
    expect(getPopover(container)).toHaveClass('custom-class');
  });
  test('Should apply custom class', () => {
    const { container } = render(VtmnPopover, {
      id: 'unit-test-id',
      'aria-label': 'aria label test',
    });
    expect(getPopover(container)).toHaveAttribute(
      'aria-label',
      'aria label test',
    );
  });
  test('Should display title slot', () => {
    const { getByText } = render(VtmnPopover, { id: 'unit-test-id' });
    expect(getByText('Unit-test title')).toBeVisible();
  });
  test('Should display description slot', () => {
    const { getByText } = render(VtmnPopover, { id: 'unit-test-id' });
    expect(getByText('unit-test body')).toBeVisible();
  });
});
