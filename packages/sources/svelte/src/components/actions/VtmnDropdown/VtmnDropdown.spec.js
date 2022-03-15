import { render } from '@testing-library/svelte';
import VtmnDropdown from './VtmnDropdown.svelte';

describe('<VtmnDropdown />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnDropdown);

    expect(container).toBeInTheDocument();
  });
});
