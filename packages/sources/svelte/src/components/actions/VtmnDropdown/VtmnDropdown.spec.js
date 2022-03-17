import { fireEvent, render } from '@testing-library/svelte';
import VtmnDropdown from './VtmnDropdown.svelte';

const props = {
  label: 'Label',
  defaultOption: 'Default label',
  options: [
    { label: 'Option Option 1', value: 'option-1' },
    { label: 'Option Option 2', value: 'option-2' },
    { label: 'Option Option 3', value: 'option-3' },
    { label: 'Option Option 4', value: 'option-4' },
  ],
  disabled: false,
  class: 'test-class',
  divider: false,
  icon: null,
  menuMaxHeight: null,
};

describe('<VtmnDropdown />', () => {
  test('Render correctly', () => {
    const { container } = render(VtmnDropdown, { props });

    expect(container).toBeInTheDocument();
  });

  test('Render menu items correctly', () => {
    const { getAllByTestId } = render(VtmnDropdown, { props });

    expect(getAllByTestId('dropdown-items')).toHaveLength(4);
  });

  test('Render divider correctly', () => {
    const { getAllByRole } = render(VtmnDropdown, {
      ...props,
      divider: true,
    });

    expect(getAllByRole('separator')).toHaveLength(3);
  });

  test('Render menu icons correctly', () => {
    const { container } = render(VtmnDropdown, {
      ...props,
      icon: 'vtmx-user-line',
    });

    expect(container.getElementsByClassName('vtmx-user-line')).toHaveLength(4);
  });

  test('Render fixed menu height correctly', () => {
    const { container } = render(VtmnDropdown, {
      ...props,
      menuMaxHeight: 100,
    });

    expect(
      container.getElementsByClassName('vtmn-dropdown_items')[0],
    ).toHaveStyle('height: 100px');
  });

  test('Render correctly the main label', () => {
    const { getByText } = render(VtmnDropdown, { props });

    expect(getByText('Label')).toBeInTheDocument();
  });

  test('Render correctly defaultOption', () => {
    const { getByText } = render(VtmnDropdown, { props });

    expect(getByText('Default label')).toBeInTheDocument();
  });

  test('Render correctly custom css class', () => {
    const { container } = render(VtmnDropdown, { props });

    expect(container.getElementsByClassName('test-class')).toHaveLength(1);
  });

  test('Render correctly disabled state', () => {
    const { container } = render(VtmnDropdown, { ...props, disabled: true });

    expect(container.querySelector('[aria-disabled="true"]')).toBeTruthy();
  });

  test('Select items', async () => {
    const { getAllByText, component } = render(VtmnDropdown, { props });

    let selectedOptions = [];

    component.$on('item-selected', (event) => {
      selectedOptions = event.detail.selectedOptions;
    });

    await fireEvent.click(getAllByText('Option Option 2')[0]);
    await fireEvent.click(getAllByText('Option Option 3')[0]);

    expect(selectedOptions).toHaveLength(2);
  });

  test('Unselect items', async () => {
    const { getAllByText, component } = render(VtmnDropdown, { props });

    let selectedOptions = [];

    component.$on('item-selected', (event) => {
      selectedOptions = event.detail.selectedOptions;
    });

    await fireEvent.click(getAllByText('Option Option 2')[0]);
    await fireEvent.click(getAllByText('Option Option 2')[0]);

    expect(selectedOptions).toHaveLength(0);
  });
});
