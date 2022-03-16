import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import VtmnSkeleton from '../VtmnSkeleton.svelte';

const timeout = 5000;

describe('VtmnSkeleton', () => {
  const getSkeleton = (container) =>
    container.getElementsByClassName('vtmn-skeleton')[0];

  test('Skeleton Should be visible', () => {
    const { container } = render(VtmnSkeleton, {
      title: 'Skeleton unit-test',
      timeout,
    });
    expect(getSkeleton(container)).toBeVisible();
  });
});
