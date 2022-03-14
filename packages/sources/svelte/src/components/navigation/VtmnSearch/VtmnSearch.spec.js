import { render } from '@testing-library/svelte';
import VtmnSearch from './VtmnSearch.svelte';

const props = {
  variant: 'default',
};

describe('<VtmnSearch />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnSearch, { ...props });

    expect(container).toBeInTheDocument();
  });
});
