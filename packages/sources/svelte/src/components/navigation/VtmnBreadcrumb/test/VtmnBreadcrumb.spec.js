import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import VtmnBreadcrumbWithSlot from './VtmnBreadcrumbWithSlot.svelte';

describe('VtmnBreadcrumbWithSlot', () => {
  test('Should display the breadcrumb', () => {
    const { container } = render(VtmnBreadcrumbWithSlot);
    expect(container.querySelector('nav')).toBeVisible();
    expect(container.querySelector('nav')).toHaveClass('vtmn-breadcrumb');
  });

  test('Should display the breadcrumb with 3 elements content in slot', () => {
    const { container } = render(VtmnBreadcrumbWithSlot);
    expect(container.querySelector('ol').children.length).toEqual(3);
  });

  test('Should apply a custom class on the breadcrumb', () => {
    const { container } = render(VtmnBreadcrumbWithSlot, {
      class: 'custom-class',
    });
    expect(container.querySelector('nav')).toHaveClass('custom-class');
  });
});
