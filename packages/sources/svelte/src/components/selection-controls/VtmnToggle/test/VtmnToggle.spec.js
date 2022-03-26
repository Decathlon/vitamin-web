import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import VtmnToggle from './VtmnToggleWithSlots.svelte';

describe('VtmnToggle', () => {
  const getToggle = (container) =>
    container.getElementsByClassName('vtmn-toggle')[0];
  const getInput = (container) =>
    container.querySelector('input[type="checkbox"]');
  const getLabel = (container) => container.querySelector('label');

  test('Should display the toggle with medium size by default', () => {
    const { container } = render(VtmnToggle, { id: 'checkbox-id' });
    expect(getToggle(container)).toHaveClass('vtmn-toggle_size--medium');
    expect(getInput(container)).toHaveAttribute('id', 'checkbox-id');
    expect(getLabel(container)).toHaveAttribute('for', 'checkbox-id');
    expect(getInput(container)).not.toHaveAttribute('disabled');
  });
  test('Should disable the toggle', () => {
    const { container } = render(VtmnToggle, {
      id: 'checkbox-id',
      disabled: true,
    });
    expect(getInput(container)).toHaveAttribute('disabled');
  });
  test('Should apply new size', () => {
    const { container } = render(VtmnToggle, {
      id: 'checkbox-id',
      size: 'small',
    });
    expect(getToggle(container)).toHaveClass('vtmn-toggle_size--small');
  });
  test('Should apply custom class', () => {
    const { container } = render(VtmnToggle, {
      id: 'checkbox-id',
      class: 'custom-class',
    });
    expect(getToggle(container)).toHaveClass('custom-class');
  });
  test('Should display the slot', () => {
    const { getByText } = render(VtmnToggle, { id: 'checkbox-id' });
    expect(getByText('Unit test toggle')).toBeVisible();
  });
  test('Should apply checked if value are true', () => {
    const { container } = render(VtmnToggle, {
      id: 'checkbox-id',
      checked: true,
    });
    expect(getInput(container).checked).toBeTruthy();
  });
});
