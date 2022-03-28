import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';
import VtmnListItem from './VtmnListItemWithSlots.svelte';

describe('VtmnListItem', () => {
  test('Should display a list-item with medium size and divider', () => {
    const { getByRole } = render(VtmnListItem, {});
    expect(getByRole('option')).toBeVisible();
    expect(getByRole('option')).toHaveClass('vtmn-list_item-size--medium');
    expect(getByRole('option')).not.toHaveClass(
      'vtmn-list_item--without-divider',
    );
    expect(getByRole('option')).toHaveAttribute('aria-disabled', 'false');
    expect(getByRole('option')).toHaveAttribute('tabindex', '0');
  });
  test('Should apply custom class on component', () => {
    const { getByRole } = render(VtmnListItem, {
      class: 'custom-class',
    });
    expect(getByRole('option')).toBeVisible();
    expect(getByRole('option')).toHaveClass('custom-class');
  });
  test('Should hide divider if divider is false', () => {
    const { getByRole } = render(VtmnListItem, { divider: false });
    expect(getByRole('option')).toBeVisible();
    expect(getByRole('option')).toHaveClass('vtmn-list_item--without-divider');
  });
  test('Should disable the item', () => {
    const { getByRole } = render(VtmnListItem, { disabled: true });
    expect(getByRole('option')).toHaveAttribute('aria-disabled', 'true');
  });
  test('Should trigger click on element', async () => {
    const handleClick = jest.fn();
    const { getByRole, component } = render(VtmnListItem, {});
    component.$on('click', handleClick);
    await fireEvent.click(getByRole('option'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('Should change the size of the list', () => {
    const { getByRole } = render(VtmnListItem, { size: 'small' });
    expect(getByRole('option')).toHaveClass('vtmn-list_item-size--small');
  });
  test('Should display the start-visual slot', () => {
    const { container } = render(VtmnListItem, {});
    expect(container.querySelector('[slot="start-visual"]')).toBeVisible();
  });
  test('Should display text and subtext slot', () => {
    const { container } = render(VtmnListItem, {});
    expect(container.querySelector('[slot="text"]')).toBeVisible();
    expect(container.querySelector('[slot="subtext"]')).toBeVisible();
  });
  test('Should display end-action slot', () => {
    const { container } = render(VtmnListItem, {});
    expect(container.querySelector('[slot="end-action"]')).toBeVisible();
  });
});
