import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import VtmnLoader from '../VtmnLoader.svelte';

describe('VtmnLoader', () => {
  const getLoader = (container) =>
    container.getElementsByClassName('vtmn-loader')[0];

  test('Loader Should be visible', () => {
    const { container } = render(VtmnLoader);
    expect(getLoader(container)).toBeVisible();
  });

  test("Loader Should have class 'vtmn-loader_size--medium' by default", () => {
    const { container } = render(VtmnLoader);
    expect(getLoader(container)).toHaveClass('vtmn-loader_size--medium');
  });

  test("Loader Should have class 'vtmn-loader_size--small' when size is small", () => {
    const { container } = render(VtmnLoader, { size: 'small' });
    expect(getLoader(container)).toHaveClass('vtmn-loader_size--small');
  });

  test("Loader Should have class 'vtmn-loader_size--small' when size is medium", () => {
    const { container } = render(VtmnLoader, { size: 'medium' });
    expect(getLoader(container)).toHaveClass('vtmn-loader_size--medium');
  });

  test("Loader Should have class 'vtmn-loader_size--small' when size is large", () => {
    const { container } = render(VtmnLoader, { size: 'large' });
    expect(getLoader(container)).toHaveClass('vtmn-loader_size--large');
  });
});
