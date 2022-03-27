import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import VtmnList from './VtmnListWithSlots.svelte';

describe('VtmnList', () => {
  test('Should display the list', () => {
    const { getByRole } = render(VtmnList);
    expect(getByRole('listbox')).toBeVisible();
    expect(getByRole('listbox')).toHaveClass('vtmn-list');
  });
  test('Should apply custom class', () => {
    const { getByRole } = render(VtmnList, { class: 'custom-class' });
    expect(getByRole('listbox')).toHaveClass('custom-class');
  });
  test('Should apply aria-label', () => {
    const { getByRole } = render(VtmnList, {
      'aria-label': 'custom aria label',
    });
    expect(getByRole('listbox')).toHaveAttribute(
      'aria-label',
      'custom aria label',
    );
  });
  test('Should display le slot', () => {
    const { getByRole } = render(VtmnList);
    expect(getByRole('listbox').children.length).toEqual(2);
  });
});
