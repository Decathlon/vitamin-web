import { render, fireEvent } from '@testing-library/svelte';
import VtmnNavbar from './VtmnNavbar.svelte';

describe('<VtmnNavbar />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnNavbar);

    expect(container).toBeInTheDocument();
  });

  test('Render correctly with all slots', () => {
    const { container } = render(VtmnNavbar, {
      slots: {
        'left-nav': '<div>left-nav</div>',
        logo: '<h1>logo</h1>',
        'middle-area': '<div>middle-area</div>',
        'right-nav': '<div>right-nav</div>',
      },
    });

    expect(container).toBeInTheDocument();
  });

  test('Render correctly with left-nav slot', () => {
    const { container } = render(VtmnNavbar, {
      slots: {
        'left-nav': '<div>left-nav</div>',
      },
    });

    expect(container).toBeInTheDocument();
  });

  test('Render correctly with logo slot', () => {
    const { container } = render(VtmnNavbar, {
      slots: {
        logo: '<h1>logo</h1>',
      },
    });

    expect(container).toBeInTheDocument();
  });

  test('Render correctly with middle-area slot', () => {
    const { container } = render(VtmnNavbar, {
      slots: {
        'middle-area': '<div>middle-area</div>',
      },
    });

    expect(container).toBeInTheDocument();
  });

  test('Render correctly with right-nav slot', () => {
    const { container } = render(VtmnNavbar, {
      slots: {
        'right-nav': '<div>right-nav</div>',
      },
    });

    expect(container).toBeInTheDocument();
  });

  test('Can add custom css classes', () => {
    const { container } = render(VtmnNavbar, {
      className: 'test-class',
    });

    expect(container.getElementsByClassName(`test-class`).length).toBe(1);
  });

  test('Can have custom props', async () => {
    const { container } = render(VtmnNavbar, { id: 'test' });

    expect(container.getElementsByTagName('nav')[0].id).toBe('test');
  });
});
