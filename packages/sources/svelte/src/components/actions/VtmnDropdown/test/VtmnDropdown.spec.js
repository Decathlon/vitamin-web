import { render } from '@testing-library/svelte';
import VtmnDropdownWithSlots from './VtmnDropdownWithSlots.svelte';

describe('VtmnDropdown', () => {
  test('Should display the dropdown', () => {
    const { container } = render(VtmnDropdownWithSlots, {
      label: 'Label',
      summary: 'Default label',
      id: 'dropdown-unit-test',
    });

    expect(container).toBeInTheDocument();
  });

  test('Should render the main label', () => {
    const { getByText } = render(VtmnDropdownWithSlots, {
      label: 'Label',
      summary: 'Default label',
      id: 'dropdown-unit-test',
    });

    expect(getByText('Label')).toBeVisible();
    expect(getByText('Label').tagName).toEqual('LABEL');
    expect(getByText('Label')).toHaveAttribute('id', 'dropdown-unit-test');
  });

  test('Should render the summary', () => {
    const { getByText } = render(VtmnDropdownWithSlots, {
      label: 'Label',
      summary: 'Default label',
      id: 'dropdown-unit-test',
    });

    expect(getByText('Default label')).toBeVisible();
    expect(getByText('Default label').tagName).toEqual('SUMMARY');
    expect(getByText('Default label')).toHaveAttribute(
      'aria-labelledby',
      'dropdown-unit-test',
    );
  });

  test('Shoudl apply custom css class', () => {
    const { container } = render(VtmnDropdownWithSlots, {
      label: 'Label',
      summary: 'Default label',
      id: 'dropdown-unit-test',
      class: 'custom-class',
    });

    expect(container.getElementsByClassName('custom-class')).toHaveLength(1);
  });

  test('Should disable the dropdown', () => {
    const { container } = render(VtmnDropdownWithSlots, {
      label: 'Label',
      summary: 'Default label',
      id: 'dropdown-unit-test',
      disabled: true,
    });

    expect(container.querySelector('[aria-disabled="true"]')).toBeTruthy();
  });
});
