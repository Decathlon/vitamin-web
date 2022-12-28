import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import VtmnTag from './VtmnTagWithSlots.svelte';

describe('VtmnTag', () => {
  const getTag = (container) => container.getElementsByClassName('vtmn-tag')[0];
  const getIcon = (container, iconName) =>
    container.getElementsByClassName(`vtmx-${iconName}`)[0];

  describe('Without href', () => {
    test('Should display the vtmn-tag on <span> node with variant', () => {
      const { container } = render(VtmnTag);
      expect(getTag(container)).toHaveClass('vtmn-tag_variant--accent');
      expect(getTag(container).tagName).toEqual('SPAN');
    });
    test('Should apply the variant', () => {
      const { container } = render(VtmnTag, { variant: 'brand' });
      expect(getTag(container)).toHaveClass('vtmn-tag_variant--brand');
    });
    test('Should apply the custom class', () => {
      const { container } = render(VtmnTag, { class: 'custom-class' });
      expect(getTag(container)).toHaveClass('custom-class');
    });
    test('Should apply an aria-label', () => {
      const { container } = render(VtmnTag, {
        'aria-label': 'custom aria label',
      });
      expect(getTag(container)).toHaveAttribute(
        'aria-label',
        'custom aria label',
      );
    });
    test('Should display icon if icon are set', () => {
      const { container } = render(VtmnTag, { icon: 'test' });
      expect(getIcon(container, 'test')).toBeVisible();
      expect(getIcon(container, 'test')).toHaveAttribute('aria-hidden', 'true');
    });
    test('Should display the slot', () => {
      const { getByText } = render(VtmnTag);
      expect(getByText('Unit-test tag')).toBeVisible();
    });
  });

  describe('With href', () => {
    test('Should display the vtmn-tag on <a> node with variant', () => {
      const { container } = render(VtmnTag, { href: 'http://example.com' });
      expect(getTag(container)).toHaveClass('vtmn-tag_variant--accent');
      expect(getTag(container).tagName).toEqual('A');
    });
    test('Should apply the variant', () => {
      const { container } = render(VtmnTag, {
        href: 'http://example.com',
        variant: 'brand',
      });
      expect(getTag(container)).toHaveClass('vtmn-tag_variant--brand');
    });
    test('Should apply the href', () => {
      const { container } = render(VtmnTag, { href: 'http://example.com' });
      expect(getTag(container)).toHaveAttribute('href', 'http://example.com');
    });
    test('Should apply the custom class', () => {
      const { container } = render(VtmnTag, {
        href: 'http://example.com',
        class: 'custom-class',
      });
      expect(getTag(container)).toHaveClass('custom-class');
    });
    test('Should apply an aria-label', () => {
      const { container } = render(VtmnTag, {
        href: 'http://example.com',
        'aria-label': 'custom aria label',
      });
      expect(getTag(container)).toHaveAttribute(
        'aria-label',
        'custom aria label',
      );
    });
    test('Should display icon if icon are set', () => {
      const { container } = render(VtmnTag, {
        href: 'http://example.com',
        icon: 'test',
      });
      expect(getIcon(container, 'test')).toBeVisible();
      expect(getIcon(container, 'test')).toHaveAttribute('aria-hidden', 'true');
    });
    test('Should display the slot', () => {
      const { getByText } = render(VtmnTag, { href: 'http://example.com' });
      expect(getByText('Unit-test tag')).toBeVisible();
    });
    test('Should apply size', () => {
      const { container } = render(VtmnTag, { size: 'small' });
      expect(getTag(container)).toHaveClass(
        'vtmn-tag_size--small',
        'vtmn-tag_variant--accent',
      );
      expect(getTag(container)).toBeVisible();
    });
    test('Should have by default medium size', () => {
      const { container } = render(VtmnTag);
      expect(getTag(container)).toHaveClass('vtmn-tag_size--medium');
      expect(getTag(container)).toBeVisible();
    });
  });
});
