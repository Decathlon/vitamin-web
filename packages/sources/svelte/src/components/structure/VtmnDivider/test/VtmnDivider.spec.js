import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import VtmnDivider from './VtmnDividerWithSlots.svelte';

describe('VtmnDivider', () => {
  const getDivider = (container) =>
    container.getElementsByClassName('vtmn-divider')[0];
  const getDividerSpan = (container) =>
    container.getElementsByClassName('vtmn-divider')[0].childNodes[0];

  test('Should display the divider with horizontal orientation, start text position by default', () => {
    const { container } = render(VtmnDivider);
    expect(getDivider(container)).toHaveClass(
      'vtmn-divider_orientation--horizontal',
      'vtmn-divider_text-position--start',
    );
  });
  test('Should apply custom class', () => {
    const { container } = render(VtmnDivider, { class: 'custom-class' });
    expect(getDivider(container)).toHaveClass('custom-class');
  });
  test('Should apply custom class', () => {
    const { container } = render(VtmnDivider, { orientation: 'vertical' });
    expect(getDivider(container)).toHaveClass(
      'vtmn-divider_orientation--vertical',
    );
  });
  test('Should apply new text position', () => {
    const { container } = render(VtmnDivider, { textPosition: 'end' });
    expect(getDivider(container)).toHaveClass(
      'vtmn-divider_text-position--end',
    );
  });
  test('Should display text position', () => {
    const { getByText } = render(VtmnDivider, { textPosition: 'end' });
    expect(getByText('unit test divider')).toBeVisible();
  });
  test('Should be accessible', () => {
    const { container } = render(VtmnDivider, {
      'aria-labelledby': 'idForTest',
    });
    expect(getDivider(container)).toHaveAttribute(
      'aria-labelledby',
      'idForTest',
    );
    expect(getDividerSpan(container)).toHaveAttribute('id', 'idForTest');
  });
});
