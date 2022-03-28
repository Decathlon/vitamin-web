import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import VtmnBadge from '../VtmnBadge.svelte';

describe('VtmnBadge', () => {
  const getBadge = (container) =>
    container.getElementsByClassName('vtmn-badge')[0];
  test("Should display vtmn-badge with default variant 'default'", () => {
    const { container } = render(VtmnBadge, { value: 10 });
    expect(getBadge(container)).toHaveClass('vtmn-badge_variant--default');
    expect(getBadge(container)).toBeVisible();
  });
  test('Should apply the variant', () => {
    const { container } = render(VtmnBadge, { value: 10, variant: 'accent' });
    expect(getBadge(container)).toHaveClass('vtmn-badge_variant--accent');
  });
  test('Should display noting if value = 0', () => {
    const { container } = render(VtmnBadge, { value: 0 });
    expect(getBadge(container).innerHTML).toEqual('');
  });
  test('Should display the value if 0 < value < 100', () => {
    const { getByText } = render(VtmnBadge, { value: 30 });
    expect(getByText('30')).toBeVisible();
  });
  test('Should display 99+ if value > 99', () => {
    const { getByText } = render(VtmnBadge, { value: 150 });
    expect(getByText('99+')).toBeVisible();
  });
  test('Should apply custom class on component', () => {
    const { container } = render(VtmnBadge, {
      value: 10,
      class: 'custom-class',
    });
    expect(getBadge(container)).toHaveClass('custom-class');
  });
  test('Should apply aria-label on component', () => {
    const { container } = render(VtmnBadge, {
      value: 10,
      'aria-label': 'custom aria label',
    });
    expect(getBadge(container)).toHaveAttribute(
      'aria-label',
      'custom aria label',
    );
  });
});
