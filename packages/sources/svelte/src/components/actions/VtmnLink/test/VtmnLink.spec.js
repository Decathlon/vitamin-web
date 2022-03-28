import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import VtmnLink from './VtmnLinkWithSlots.svelte';

const links = { href: 'http://example.com' };
describe('VtmnLink', () => {
  const getLink = (container) =>
    container.getElementsByClassName('vtmn-link')[0];
  test('Should display vtmn-link with medium size', () => {
    const { container } = render(VtmnLink, { ...links });
    expect(getLink(container)).toBeVisible();
    expect(getLink(container)).toHaveClass('vtmn-link_size--medium');
  });
  test('Should apply custom class on component', () => {
    const { container } = render(VtmnLink, { ...links, class: 'custom-class' });
    expect(getLink(container)).toHaveClass('custom-class');
  });
  test('Should change size if attribute size change', () => {
    const { container } = render(VtmnLink, { ...links, size: 'large' });
    expect(getLink(container)).toHaveClass('vtmn-link_size--large');
  });
  test('Should apply standalone', () => {
    const { container } = render(VtmnLink, { ...links, standalone: true });
    expect(getLink(container)).toHaveClass('vtmn-link--standalone');
  });
  test('Should apply icon along if standalone are set', () => {
    const { container } = render(VtmnLink, {
      ...links,
      standalone: true,
      iconAlong: true,
    });
    expect(getLink(container)).toHaveClass(
      'vtmn-link--standalone',
      'vtmn-link--icon-along',
    );
  });
  test('Should not apply iconAlong if standalone is false', () => {
    const { container } = render(VtmnLink, { ...links, iconAlong: true });
    expect(getLink(container)).not.toHaveClass(
      'vtmn-link--standalone',
      'vtmn-link--icon-along',
    );
  });
  test('Should apply href on vtmn-link', () => {
    const { container } = render(VtmnLink, { ...links, href: 'example.fr' });
    expect(getLink(container)).toHaveAttribute('href', 'example.fr');
  });
  test('Should display the slot under the vtmn-link', () => {
    const { getByText } = render(VtmnLink, { ...links });
    expect(getByText('Unit-test')).toBeVisible();
  });
});
