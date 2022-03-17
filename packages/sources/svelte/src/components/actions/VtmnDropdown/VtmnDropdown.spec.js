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
};

describe('<VtmnDropdown />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnDropdown, { props });

    expect(container).toBeInTheDocument();
  });

  test('Renders menu items correctly', () => {
    const { getAllByTestId } = render(VtmnDropdown, { props });

    expect(getAllByTestId('dropdown-items')).toHaveLength(4);
  });

  test('Renders correctly the main label', () => {
    const { getByText } = render(VtmnDropdown, { props });

    expect(getByText('Label')).toBeInTheDocument();
  });

  test('Renders correctly defaultOption', () => {
    const { getByText } = render(VtmnDropdown, { props });

    expect(getByText('Default label')).toBeInTheDocument();
  });

  test('Renders correctly custom css class', () => {
    const { container } = render(VtmnDropdown, { props });

    expect(container.getElementsByClassName('test-class')).toHaveLength(1);
  });

  test('Renders correctly disabled state', () => {
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
