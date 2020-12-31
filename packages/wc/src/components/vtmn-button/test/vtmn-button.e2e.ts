import { newE2EPage } from '@stencil/core/testing';

describe('vtmn-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vtmn-button></vtmn-button>');

    const element = await page.find('vtmn-button');
    expect(element).toHaveClass('hydrated');
  });
});
