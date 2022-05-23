import { render } from '@testing-library/svelte';
import VtmnTabsItem from './../VtmnTabsItem.svelte';

describe('VtmnTabsItem', () => {
  test('Should be have a href', () => {
    const { container } = render(VtmnTabsItem, { href: '#test' });
    expect(container.getElementsByTagName('a')[0].getAttribute('href')).toEqual(
      '#test',
    );
  });

  test('Should be have a icon', () => {
    const { container } = render(VtmnTabsItem, { icon: 'heart-line' });
    expect(
      container.getElementsByClassName('vtmx-heart-line')[0],
    ).toBeVisible();
  });

  test('Should be have a badge', () => {
    const { container } = render(VtmnTabsItem, { badgeValue: 6 });
    expect(container.getElementsByClassName('vtmn-badge')[0]).toBeVisible();
  });
});
