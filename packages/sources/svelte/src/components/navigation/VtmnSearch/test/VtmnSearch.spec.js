import { render, fireEvent } from '@testing-library/svelte';
import VtmnSearch from '../VtmnSearch.svelte';
import { VTMN_SEARCH_VARIANT, VTMN_SEARCH_SIZE } from '../enums';

describe('<VtmnSearch />', () => {
  const props = {
    value: 'input value unit test',
    ariaLabels: {
      clearButton: 'clear',
      searchButton: 'search',
    },
  };
  test('Renders correctly', () => {
    const { container } = render(VtmnSearch, { ...props });

    expect(container).toBeInTheDocument();
  });

  test('Renders correctly persistent variant', () => {
    const { container } = render(VtmnSearch, {
      ...props,
      variant: VTMN_SEARCH_VARIANT.PERSISTENT,
    });

    expect(
      container.getElementsByClassName(
        `vtmn-search_variant--${VTMN_SEARCH_VARIANT.PERSISTENT}`,
      ).length,
    ).toBe(1);
  });

  test('Should not display clear button', () => {
    const { queryByLabelText } = render(VtmnSearch, {
      value: '',
      ariaLabels: {
        clearButton: 'clear button',
      },
    });
    expect(queryByLabelText('clear button')).toBeNull();
  });

  test('Should display clear button if value are defined', () => {
    const { getByLabelText } = render(VtmnSearch, {
      ...props,
      ariaLabels: {
        clearButton: 'clear button',
      },
    });
    expect(getByLabelText('clear button')).toBeVisible();
  });

  test('Renders correctly on-content variant', () => {
    const { container } = render(VtmnSearch, {
      ...props,
      variant: VTMN_SEARCH_VARIANT.ON_CONTENT,
    });

    expect(
      container.getElementsByClassName(
        `vtmn-search_variant--${VTMN_SEARCH_VARIANT.ON_CONTENT}`,
      ).length,
    ).toBe(1);
  });

  test('Renders correctly small size variant', () => {
    const { container } = render(VtmnSearch, {
      ...props,
      size: VTMN_SEARCH_SIZE.SMALL,
    });

    expect(
      container.getElementsByClassName(
        `vtmn-search_size--${VTMN_SEARCH_SIZE.SMALL}`,
      ).length,
    ).toBe(1);
  });

  test('Renders correctly disabled state', () => {
    const { container } = render(VtmnSearch, {
      ...props,
      disabled: true,
    });

    expect(container.getElementsByTagName('input')[0]).toBeDisabled();
  });

  test('Can add custom css classes', () => {
    const { container } = render(VtmnSearch, {
      ...props,
      class: 'test-class',
    });

    expect(container.getElementsByClassName(`test-class`).length).toBe(1);
  });

  test('Can reset input value', async () => {
    const { container, getAllByLabelText } = render(VtmnSearch, {
      ...props,
      value: 'test',
    });
    const clearButton = getAllByLabelText('clear')[0];
    const input = container.getElementsByTagName('input')[0];

    await fireEvent.click(clearButton);

    expect(input.value).toBe('');
  });

  test('Search event is dispatched', async () => {
    const handleClick = jest.fn();
    const { component, getAllByLabelText } = render(VtmnSearch, { ...props });

    component.$on('search', handleClick);

    await fireEvent.click(getAllByLabelText('search')[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Can have custom props', async () => {
    const { container } = render(VtmnSearch, { ...props, alt: 'test' });

    expect(container.getElementsByTagName('input')[0].alt).toBe('test');
  });
});
