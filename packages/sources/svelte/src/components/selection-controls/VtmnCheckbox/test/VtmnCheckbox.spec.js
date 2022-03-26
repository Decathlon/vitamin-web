import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import VtmnCheckbox from './VtmnCheckboxWithSlots.svelte';

describe('VtmnCheckbox', () => {
  const getCheckbox = (container) =>
    container.getElementsByClassName('vtmn-checkbox')[0];

  test('Should display the checkbox', () => {
    const { container } = render(VtmnCheckbox, { id: 'test-checkbox' });
    expect(getCheckbox(container)).toBeVisible();
    expect(getCheckbox(container)).toHaveAttribute('id', 'test-checkbox');
    expect(getCheckbox(container)).not.toHaveAttribute('disabled');
  });
  test('Should apply custom class', () => {
    const { container } = render(VtmnCheckbox, {
      id: 'test-checkbox',
      class: 'custom-class',
    });
    expect(getCheckbox(container)).toHaveClass('custom-class');
  });
  test('Should apply slot under label', () => {
    const { getByText } = render(VtmnCheckbox, {
      id: 'test-checkbox',
      class: 'custom-class',
    });
    expect(getByText('unit test checkbox')).toBeVisible();
  });
  test('Should apply aria-label', () => {
    const { container } = render(VtmnCheckbox, {
      id: 'test-checkbox',
      'aria-label': 'unit aria label',
    });
    expect(getCheckbox(container)).toHaveAttribute(
      'aria-label',
      'unit aria label',
    );
  });
  test('Should apply disabled', () => {
    const { container } = render(VtmnCheckbox, {
      id: 'test-checkbox',
      disabled: true,
    });
    expect(getCheckbox(container)).toHaveAttribute('disabled');
  });
});
