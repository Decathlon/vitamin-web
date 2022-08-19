import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';
import VtmnSelect from './VtmnSelectWithSlots.svelte';

describe('VtmnSelect', () => {
  const getSelectContainer = (container) =>
    container.getElementsByClassName('vtmn-select_container')[0];
  const getSelect = (container) => container.querySelector('select');
  const getSlot = (container) => container.querySelectorAll('option');

  test('Should display the select', () => {
    const { container } = render(VtmnSelect, {
      id: 'my-select',
      name: 'sports',
      label: 'Label',
      value: '',
    });
    expect(getSelectContainer(container)).toBeVisible();
    expect(getSelect(container)).toHaveAttribute('name', 'sports');
    expect(getSelect(container)).toHaveAttribute('id', 'my-select');
    expect(getSelect(container)).toHaveAttribute('autocomplete', 'off');
    expect(getSelect(container)).not.toHaveClass('vtmn-select--error');
    expect(getSelect(container)).not.toHaveAttribute('aria-invalid');
    expect(getSelect(container)).not.toHaveAttribute('aria-describedby');
  });
  test('Should apply custom class', () => {
    const { container } = render(VtmnSelect, {
      id: 'my-select',
      name: 'sports',
      label: 'Label',
      class: 'custom-class',
      value: '',
    });
    expect(getSelectContainer(container)).toHaveClass('custom-class');
  });
  test('Should display the label', () => {
    const { getByText } = render(VtmnSelect, {
      id: 'my-select',
      name: 'sports',
      label: 'Label',
      value: '',
    });
    expect(getByText('Label')).toBeVisible();
    expect(getByText('Label')).toHaveAttribute('for', 'my-select');
  });
  test('Should apply disabled on select', () => {
    const { container } = render(VtmnSelect, {
      id: 'my-select',
      name: 'sports',
      label: 'Label',
      disabled: true,
      value: '',
    });
    expect(getSelect(container)).toHaveAttribute('disabled');
  });
  test('Should apply autocomplete on select', () => {
    const { container } = render(VtmnSelect, {
      id: 'my-select',
      name: 'sports',
      label: 'Label',
      autocomplete: true,
      value: '',
    });
    expect(getSelect(container)).toHaveAttribute('autocomplete');
  });
  test('Should display the error', () => {
    const { container, getByText } = render(VtmnSelect, {
      id: 'my-select',
      name: 'sports',
      label: 'Label',
      error: 'custom error',
      value: '',
    });
    expect(getByText('custom error')).toHaveAttribute(
      'id',
      'error-text-my-select',
    );
    expect(getByText('custom error')).toHaveClass('vtmn-select_error-text');
    expect(getSelect(container)).toHaveClass('vtmn-select--error');
    expect(getSelect(container)).toHaveAttribute('aria-invalid');
    expect(getSelect(container)).toHaveAttribute(
      'aria-describedby',
      'error-text-my-select',
    );
  });
  test('Should display options elements under the select', () => {
    const { container } = render(VtmnSelect, {
      id: 'my-select',
      name: 'sports',
      label: 'Label',
      value: '',
    });
    expect(getSlot(container).length).toEqual(7);
  });
  test('Should trigger event change when select change', async () => {
    const handleClick = jest.fn();
    const { container, component } = render(VtmnSelect, {
      id: 'my-select',
      name: 'sports',
      label: 'Label',
      value: '',
    });
    component.$on('change', handleClick);
    await fireEvent.change(getSelect(container).children[4], {
      target: { value: 'surf' },
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
