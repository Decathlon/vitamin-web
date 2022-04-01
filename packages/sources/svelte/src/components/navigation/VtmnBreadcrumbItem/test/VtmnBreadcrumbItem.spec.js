import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import VtmnBreadcrumbItem from './VtmnBreadcrumbWithSlot.svelte';

describe('VtmnBreadcrumbItem', () => {
  const getSlotIcon = (container) => container.querySelector('[slot="icon"]');
  const getSlotLink = (container) => container.querySelector('[slot="link"]');

  test('Should pass class from parameters', () => {
    const { container } = render(VtmnBreadcrumbItem, { class: 'unit-test' });
    expect(container).toHaveClass('unit-test');
  });
  test('Should display the icon slot', () => {
    const { container } = render(VtmnBreadcrumbItem, {});
    expect(getSlotIcon(container)).toBeVisible();
  });

  test('Should display link slot', () => {
    const { container } = render(VtmnBreadcrumbItem, {});
    expect(getSlotLink(container)).toBeVisible();
  });
});
