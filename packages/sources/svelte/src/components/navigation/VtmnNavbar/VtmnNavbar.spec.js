import { render, fireEvent } from '@testing-library/svelte';
import VtmnNavbar from './VtmnNavbar.svelte';

describe('<VtmnNavbar />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnNavbar);

    expect(container).toBeInTheDocument();
  });

  test('Can add custom css classes', () => {
    const { container } = render(VtmnNavbar, {
      className: 'test-class',
    });

    expect(container.getElementsByClassName(`test-class`).length).toBe(1);
  });

  test('Render navMenu correctly', () => {
    const { container } = render(VtmnNavbar, { navMenu: true });

    expect(
      container.getElementsByClassName('vtmn-navbar_left-navigation').length,
    ).toBe(1);
  });

  test('Render logo correctly', () => {
    const { container } = render(VtmnNavbar, { logo: true });

    expect(container.getElementsByClassName('vtmn-navbar_logo').length).toBe(1);
  });

  test('Render search correctly', () => {
    const { container } = render(VtmnNavbar, { search: true });

    expect(
      container.getElementsByClassName('vtmn-navbar_middle-area').length,
    ).toBe(1);
  });

  test('Can have custom props', async () => {
    const { container } = render(VtmnNavbar, { id: 'test' });

    expect(container.getElementsByTagName('nav')[0].id).toBe('test');
  });

  test('ToggleMenu event is dispatched', async () => {
    const handleClick = jest.fn();
    const { container, component } = render(VtmnNavbar, {
      navMenu: true,
    });

    component.$on('toggleMenu', handleClick);

    await fireEvent.click(container.getElementsByTagName('button')[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
