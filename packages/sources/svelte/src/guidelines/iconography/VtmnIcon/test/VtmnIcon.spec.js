import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';
import VtmnIcon from '../VtmnIcon.svelte';

describe('VtmnIcon', () => {
  const getIcon = (container, iconName) =>
    container.getElementsByClassName(`vtmx-${iconName}`)[0];

  test('Should display the icon with default variant and default size', () => {
    const { container } = render(VtmnIcon, { value: 'test' });
    const icon = getIcon(container, 'test');
    expect(icon).toBeVisible();
    expect(icon).toHaveClass('vtmn-icon-size');
    expect(icon.style.getPropertyValue('--vtmn-icon-size')).toEqual('24px');
    expect(icon.style.getPropertyValue('--vtmn-icon-semantic-color')).toEqual(
      '',
    );
  });
  test('Should change the variant', () => {
    const { container } = render(VtmnIcon, {
      value: 'test',
      variant: 'positive',
    });
    const icon = getIcon(container, 'test');
    expect(icon.style.getPropertyValue('--vtmn-icon-semantic-color')).toEqual(
      'var(--vtmn-semantic-color_content-positive)',
    );
  });
  test('Should define style size', () => {
    const { container } = render(VtmnIcon, { value: 'test', size: 12 });
    const icon = getIcon(container, 'test');
    expect(icon.style.getPropertyValue('--vtmn-icon-size')).toEqual('12px');
  });
  test('Should apply custom class', () => {
    const { container } = render(VtmnIcon, {
      value: 'test',
      class: 'custom-class',
    });
    const icon = getIcon(container, 'test');
    expect(icon).toHaveClass('custom-class');
  });
  test('Should apply aria-label', () => {
    const { container } = render(VtmnIcon, {
      value: 'test',
      'aria-label': 'custom aria label',
    });
    const icon = getIcon(container, 'test');
    expect(icon).toHaveAttribute('aria-label', 'custom aria label');
  });
});
