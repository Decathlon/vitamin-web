import { render } from '@testing-library/svelte';
import VtmnNavbarLink from './VtmnNavbarLinkWithSlot.svelte';

describe('<VtmnNavbarLink />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnNavbarLink);

    expect(container).toBeInTheDocument();
  });

  test('Renders correctly with icon, label', () => {
    const { container, getByText } = render(VtmnNavbarLink, {
      icon: 'question-line',
      label: 'Contact us',
    });

    expect(container).toBeVisible();
    expect(
      container.children[0].getElementsByClassName('vtmx-question-line').length,
    ).toBe(1);
    expect(getByText('Contact us')).toBeDefined();
  });

  test('Can add custom css classes', () => {
    const { container } = render(VtmnNavbarLink, {
      class: 'test-class',
    });

    expect(container.getElementsByClassName(`test-class`).length).toBe(1);
  });

  test('Can have custom props', () => {
    const { container } = render(VtmnNavbarLink, { id: 'test' });

    expect(container.getElementsByTagName('a')[0].id).toBe('test');
  });

  test('Should display a badge', () => {
    const { container } = render(VtmnNavbarLink, {
      icon: 'question-line',
      label: 'Contact us',
      badgeValue: 3,
    });
    expect(container.querySelector('span[class^="vtmn-badge"]')).toBeVisible();
  });
});
