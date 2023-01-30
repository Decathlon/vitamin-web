import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import VtmnPrice from './VtmnPriceWithSlots.svelte';

describe('VtmnPrice', () => {
  const getPrice = (container) =>
    container.getElementsByClassName('vtmn-price')[0];

  test('Should display vtmn-price with medium size and default variant', () => {
    const { container } = render(VtmnPrice);
    expect(getPrice(container)).toHaveClass(
      'vtmn-price_size--medium',
      'vtmn-price_variant--default',
    );
    expect(getPrice(container)).toBeVisible();
  });
  test('Should apply size', () => {
    const { container } = render(VtmnPrice, { size: 'large' });
    expect(getPrice(container)).toHaveClass(
      'vtmn-price_size--large',
      'vtmn-price_variant--default',
    );
    expect(getPrice(container)).toBeVisible();
  });
  test('Should apply variant', () => {
    const { container } = render(VtmnPrice, { variant: 'alert' });
    expect(getPrice(container)).toHaveClass(
      'vtmn-price_size--medium',
      'vtmn-price_variant--alert',
    );
    expect(getPrice(container)).toBeVisible();
  });
  test('Should apply no padding parameter', () => {
    const { container } = render(VtmnPrice, { noPadding: true });
    expect(getPrice(container)).toHaveClass('vtmn-price--no-padding');
    expect(getPrice(container)).toBeVisible();
  });
  test('Should apply custom class on component', () => {
    const { container } = render(VtmnPrice, { class: 'custom-class' });
    expect(getPrice(container)).toHaveClass('custom-class');
    expect(getPrice(container)).toBeVisible();
  });
  test('Should apply aria-label on component', () => {
    const { container } = render(VtmnPrice, {
      'aria-label': 'custom aria label',
    });
    expect(getPrice(container)).toHaveAttribute(
      'aria-label',
      'custom aria label',
    );
  });
  test('Should display the slot', () => {
    const { getByText } = render(VtmnPrice);
    expect(getByText('100 €')).toBeVisible();
  });
});
