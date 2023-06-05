import { render } from '@testing-library/svelte';
import VtmnNavbarLink from '../VtmnNavbarLink.svelte';

describe('<VtmnNavbarLink />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnNavbarLink);

    expect(container).toBeInTheDocument();
  });

  test('Renders correctly with icon, label & showLabel = true', () => {
    const { container, getByText } = render(VtmnNavbarLink, {
      icon: 'question-line',
      label: 'Contact us',
      showLabel: true,
    });

    expect(container).toBeVisible();
    expect(
      container.getElementsByClassName('vtmn-navbar_link--icon-alone').length,
    ).toBe(0);
    expect(
      container.children[0].getElementsByClassName('vtmx-question-line').length,
    ).toBe(1);
    expect(getByText('Contact us')).toBeDefined();
  });

  test('Renders correctly with icon, label & showLabel = false', () => {
    const { container, getByText } = render(VtmnNavbarLink, {
      icon: 'question-line',
      label: 'Contact us',
      showLabel: false,
    });

    expect(container).toBeVisible();
    expect(
      container.getElementsByClassName('vtmn-navbar_link--icon-alone').length,
    ).toBe(1);
    expect(
      container.children[0].getElementsByClassName('vtmx-question-line').length,
    ).toBe(1);
    expect(container.getElementsByClassName('vtmn-sr-only')[0]).toBeDefined();
    expect(getByText('Contact us')).toBeDefined();
  });

  test('Can add custom css classes', () => {
    const { container } = render(VtmnNavbarLink, {
      class: 'test-class',
    });

    expect(container.getElementsByClassName(`test-class`).length).toBe(1);
  });

  test('Can have custom props', async () => {
    const { container } = render(VtmnNavbarLink, { id: 'test' });

    expect(container.getElementsByTagName('a')[0].id).toBe('test');
  });
});
