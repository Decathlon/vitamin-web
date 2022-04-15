import VtmnDropdownItem from './VtmnDropdownItemWithSlots.svelte';
import { render, fireEvent } from '@testing-library/svelte';

describe('VtmnDropdownItem', () => {
  test('Should display the dropdown item', () => {
    const { container } = render(VtmnDropdownItem, {
      id: 'dropdown-item',
      value: 1,
      group: [],
    });
    expect(container).toBeVisible();
  });

  test('Should display a checkbox input', () => {
    const { container } = render(VtmnDropdownItem, {
      id: 'dropdown-item',
      value: 1,
      group: [],
    });
    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toHaveAttribute('id', 'dropdown-item');
    expect(checkbox.value).toEqual('1');
  });

  test('Should apply custom class', () => {
    const { container } = render(VtmnDropdownItem, {
      id: 'dropdown-item',
      value: 1,
      group: [],
      class: 'unit-test',
    });
    expect(container.querySelector('input[type="checkbox"]')).toHaveClass(
      'unit-test',
    );
  });

  test('Should display the label', () => {
    const { getByText } = render(VtmnDropdownItem, {
      id: 'dropdown-item',
      value: 1,
      group: [],
    });
    expect(getByText('Unit test 1')).toBeVisible();
    expect(getByText('Unit test 1')).toHaveAttribute('for', 'dropdown-item');
  });

  test('Should display correctly with icon', () => {
    const { container } = render(VtmnDropdownItem, {
      id: 'dropdown-item',
      value: 1,
      group: [],
      icon: 'user-line',
    });

    expect(container.getElementsByClassName('vtmx-user-line')).toHaveLength(1);
  });

  test('Should display a divider', () => {
    const { getByRole } = render(VtmnDropdownItem, {
      id: 'dropdown-item',
      value: 1,
      group: [],
      divider: true,
    });

    expect(getByRole('separator')).toBeVisible();
  });

  test('Should trigger on:change on click', async () => {
    const handleClick = jest.fn();
    const group = [];
    const { container } = render(VtmnDropdownItem, {
      id: 'dropdown-item',
      value: 1,
      group,
    });
    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox.checked).toBeFalsy();
    expect(group.length).toEqual(0);

    await fireEvent.click(checkbox);

    expect(checkbox.checked).toBeTruthy();
    expect(group.length).toEqual(1);
    expect(group[0]).toEqual(1);
  });
});
