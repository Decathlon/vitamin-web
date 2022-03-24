import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import VtmnTooltip from '../VtmnTooltip.svelte';

describe('VtmnTooltip', () => {
  const getTooltip = (container) =>
    container.getElementsByClassName('vtmn-tooltip')[0];

  test('Tooltip Should be visible', () => {
    const { container } = render(VtmnTooltip, { tooltip: 'test' });
    expect(getTooltip(container)).toBeVisible();
  });

  test("Should have an attribute 'position'", () => {
    const { container } = render(VtmnTooltip, { tooltip: 'test' });
    expect(getTooltip(container)).toHaveAttribute('data-position', 'top');
  });

  test("Should have an attribute 'tooltip'", () => {
    const { container } = render(VtmnTooltip, { tooltip: 'test' });
    expect(getTooltip(container)).toHaveAttribute('data-tooltip', 'test');
  });

  test("Should have the position 'right' if position = 'right'", () => {
    const { container } = render(VtmnTooltip, {
      position: 'right',
      tooltip: 'test',
    });
    expect(getTooltip(container)).toHaveAttribute('data-position', 'right');
  });

  test("Should have the tooltip 'OK' if tooltip = 'OK'", () => {
    const { container } = render(VtmnTooltip, { tooltip: 'OK' });
    expect(getTooltip(container)).toHaveAttribute('data-tooltip', 'OK');
  });
});
