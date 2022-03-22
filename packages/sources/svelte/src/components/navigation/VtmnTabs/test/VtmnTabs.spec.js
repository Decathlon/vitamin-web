import { render } from '@testing-library/svelte';
import VtmnTabs from './../VtmnTabs.svelte';

describe('<VtmnTabs />', () => {
  test('Renders correctly', () => {
    const { container } = render(VtmnTabs);

    expect(container).toBeInTheDocument();
  });
});
