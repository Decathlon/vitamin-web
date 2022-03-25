import { render } from '@testing-library/svelte';
import VtmnTabs from './../VtmnTabs.svelte';
import VtmnTabsItem from './../VtmnTabsItem.svelte';
import VtmnTabsWithSlot from './VtmnTabsWithSlot.svelte';

describe('VtmnTabs', () => {
  const getTabsContainer = (container) =>
    container.getElementsByClassName('vtmn-tabs')[0];

  test('Should be start aligned by default', () => {
    const { container } = render(VtmnTabs);
    expect(getTabsContainer(container)).toHaveClass('vtmn-tabs_align--start');
  });

  test('Should be center aligned', () => {
    const { container } = render(VtmnTabs, { align: 'center' });
    expect(getTabsContainer(container)).toHaveClass('vtmn-tabs_align--center');
  });

  test('Should be end aligned', () => {
    const { container } = render(VtmnTabs, { align: 'end' });
    expect(getTabsContainer(container)).toHaveClass('vtmn-tabs_align--end');
  });

  test('Should be medium size by default', () => {
    const { container } = render(VtmnTabs);
    expect(getTabsContainer(container)).toHaveClass('vtmn-tabs_size--medium');
  });

  test('Should be medium size by default', () => {
    const { container } = render(VtmnTabs, { size: 'small' });
    expect(getTabsContainer(container)).toHaveClass('vtmn-tabs_size--small');
  });

  test('Should have a divider', () => {
    const { getByRole } = render(VtmnTabs);
    expect(getByRole('separator')).toBeVisible();
  });
});

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
    const { container } = render(VtmnTabsItem, { badge: 6 });
    expect(container.getElementsByClassName('vtmn-badge')[0]).toBeVisible();
  });
});

describe('VtmnTabsWithSlot', () => {
  test('Should have tab name', () => {
    const { getByText } = render(VtmnTabsWithSlot);
    expect(getByText('Tab Name')).toBeVisible();
  });

  test('Should be have a icon', () => {
    const { container } = render(VtmnTabsWithSlot);
    expect(
      container.getElementsByClassName('vtmx-checkbox-circle-line')[0],
    ).toBeVisible();
  });

  test('Should be have a badge with 99', () => {
    const { getByText } = render(VtmnTabsWithSlot);
    expect(getByText('99')).toBeVisible();
  });
});
