import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import VtmnBreadcrumbItem from './VtmnBreadcrumbItemWithSlot.svelte';

describe('VtmnBreadcrumbItem', () => {
  test('Should display the item', () => {
    const { container } = render(VtmnBreadcrumbItem, {});
    expect(container.querySelector('li')).toBeVisible();
  });

  test('Should display the icon if parameter icon are defined', () => {
    const { container } = render(VtmnBreadcrumbItem, { class: 'unit-test' });
    expect(container.querySelector('li')).toHaveClass('unit-test');
  });
  test('Should display the slot under the item', () => {
    const { getByText } = render(VtmnBreadcrumbItem, {});
    expect(getByText('Test breadcrumb item')).toBeVisible();
  });

  test('Should apply class from parameters', () => {
    const { container } = render(VtmnBreadcrumbItem, { icon: 'home-line' });
    expect(container.getElementsByClassName('vtmx-home-line')[0]).toBeVisible();
  });

  test('Should apply an tag <a> if href are set', () => {});
});
