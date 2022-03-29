import { fireEvent, render } from '@testing-library/svelte';
import VtmnDropdownWithSlot from './VtmnDropdownWithSlot.svelte';

const props = {
  labelText: 'Label',
  defaultOption: 'Default label',
  disabled: false,
  class: 'test-class',
};

describe('<VtmnDropdown />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnDropdownWithSlot, {
      props,
    });

    expect(container).toBeInTheDocument();
  });

  test('Renders correctly the main label', () => {
    const { getByText } = render(VtmnDropdownWithSlot, {
      props,
    });

    expect(getByText('Label')).toBeInTheDocument();
  });

  test('Renders correctly defaultOption', () => {
    const { getByText } = render(VtmnDropdownWithSlot, {
      props,
    });

    expect(getByText('Default label')).toBeInTheDocument();
  });

  test('Renders correctly custom css class', () => {
    const { container } = render(VtmnDropdownWithSlot, {
      props,
    });

    expect(container.getElementsByClassName('test-class')).toHaveLength(1);
  });

  test('Renders correctly disabled state', () => {
    const { container } = render(VtmnDropdownWithSlot, {
      ...props,
      disabled: true,
    });

    expect(container.querySelector('[aria-disabled="true"]')).toBeTruthy();
  });

  test('Select items', async () => {
    const { getByText, component } = render(VtmnDropdownWithSlot, { props });

    let selectedOptions = [];

    component.$on('test-selected', (event) => {
      selectedOptions = event.detail.value;
    });

    await fireEvent.click(getByText('Option 2'));
    await fireEvent.click(getByText('Option 3'));

    expect(selectedOptions).toHaveLength(2);
  });

  test('Unselect items', async () => {
    const { getByText, component } = render(VtmnDropdownWithSlot, { props });

    let selectedOptions = [];

    component.$on('test-selected', (event) => {
      selectedOptions = event.detail.value;
    });

    await fireEvent.dblClick(getByText('Option 2'));

    expect(selectedOptions).toHaveLength(0);
  });
});
