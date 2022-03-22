import VtmnDropdownItem from '../VtmnDropdownItem/VtmnDropdownItem.svelte';
import { fireEvent, render } from '@testing-library/svelte';

const props = {
  label: 'Label',
  value: 'test-value',
  icon: 'vtmx-user-line',
  class: 'test-class',
};

describe('<VtmnDropdownItem />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnDropdownItem, {
      props,
    });

    expect(container).toBeInTheDocument();
  });

  test('Emit value on click', async () => {
    const { getAllByText, component } = render(VtmnDropdownItem, {
      props,
    });

    let selectedOptions = [];

    component.$on('item-selected', (event) => {
      selectedOptions = event.detail.value;
    });

    await fireEvent.click(getAllByText('Label')[0]);

    expect(selectedOptions).toBe('test-value');
  });

  test('Renders correctly with divider', () => {
    const { container } = render(VtmnDropdownItem, { ...props, divider: true });

    expect(container.getElementsByClassName('vtmn-divider')).toHaveLength(1);
  });

  test('Renders correctly with icon', () => {
    const { container } = render(VtmnDropdownItem, {
      props,
    });

    expect(container.getElementsByClassName('vtmx-user-line')).toHaveLength(1);
  });

  test('Renders correctly custom css class', () => {
    const { container } = render(VtmnDropdownItem, {
      props,
    });

    expect(container.getElementsByClassName('test-class')).toHaveLength(1);
  });
});
