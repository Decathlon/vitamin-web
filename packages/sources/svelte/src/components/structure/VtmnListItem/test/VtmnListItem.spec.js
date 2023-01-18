import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';
import VtmnListItem from './VtmnListItemWithSlots.svelte';

describe('VtmnListItem', () => {
  test('Should display a list-item with medium size and divider', () => {
    const { getByRole } = render(VtmnListItem, {});
    expect(getByRole('listitem')).toBeVisible();
    expect(getByRole('listitem')).toHaveClass('vtmn-list_item-size--medium');
    expect(getByRole('listitem')).not.toHaveClass(
      'vtmn-list_item--without-divider',
    );
    expect(getByRole('listitem')).toHaveAttribute('aria-disabled', 'false');
    expect(getByRole('listitem')).toHaveAttribute('tabindex', '0');
  });
  test('Should apply custom class on component', () => {
    const { getByRole } = render(VtmnListItem, {
      class: 'custom-class',
    });
    expect(getByRole('listitem')).toBeVisible();
    expect(getByRole('listitem')).toHaveClass('custom-class');
  });
  test('Should hide divider if divider is false', () => {
    const { getByRole } = render(VtmnListItem, { divider: false });
    expect(getByRole('listitem')).toBeVisible();
    expect(getByRole('listitem')).toHaveClass(
      'vtmn-list_item--without-divider',
    );
  });
  test('Should disable the item', () => {
    const { getByRole } = render(VtmnListItem, { disabled: true });
    expect(getByRole('listitem')).toHaveAttribute('aria-disabled', 'true');
  });
  test('Should trigger click on element', async () => {
    const handleClick = jest.fn();
    const { getByRole, component } = render(VtmnListItem, {});
    component.$on('click', handleClick);
    await fireEvent.click(getByRole('listitem'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('Should change the size of the list', () => {
    const { getByRole } = render(VtmnListItem, { size: 'small' });
    expect(getByRole('listitem')).toHaveClass('vtmn-list_item-size--small');
  });
  test('Should display the start-visual slot', () => {
    const { container } = render(VtmnListItem, {});
    expect(container.querySelector('[slot="start-visual"]')).toBeVisible();
  });
  test('Should display text and subtext slot', () => {
    const { container } = render(VtmnListItem, {});
    expect(container.querySelector('[slot="text"]')).toBeVisible();
    expect(container.querySelector('[slot="subtext"]')).toBeVisible();
  });
  test('Should display end-action slot', () => {
    const { container } = render(VtmnListItem, {});
    expect(container.querySelector('[slot="end-action"]')).toBeVisible();
  });
  test('Should have a link element', () => {
    const { getByRole } = render(VtmnListItem, {
      href: 'https://decathlon.fr',
    });
    expect(getByRole('link')).toHaveAttribute('href', 'https://decathlon.fr');
    expect(getByRole('link')).toHaveAttribute('aria-disabled', 'false');
  });
  test('Should trigger click when user click on the the link element', async () => {
    const { getByRole, component } = render(VtmnListItem, {
      href: 'https://decathlon.fr',
    });
    const handleClick = jest.fn();
    component.$on('click', handleClick);
    await fireEvent.click(getByRole('link'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('Should trigger once click if href + click slot button', async () => {
    const { getByRole, component } = render(VtmnListItem, {
      href: 'https://decathlon.fr',
    });
    const handleClick = jest.fn();
    component.$on('click', handleClick);
    await fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('Should have a link element disabled', () => {
    const { getByRole } = render(VtmnListItem, {
      href: 'https://decathlon.fr',
      disabled: true,
    });
    expect(getByRole('link')).toHaveAttribute('href', 'https://decathlon.fr');
    expect(getByRole('link')).toHaveAttribute('aria-disabled', 'true');
  });
  test('Should have a link _blank with noopener noreferrer', () => {
    const { getByRole } = render(VtmnListItem, {
      props: { href: 'https://decathlon.fr', target: '_blank' },
    });
    expect(getByRole('link')).toHaveAttribute('href', 'https://decathlon.fr');
    expect(getByRole('link')).toHaveAttribute('target', '_blank');
    expect(getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
