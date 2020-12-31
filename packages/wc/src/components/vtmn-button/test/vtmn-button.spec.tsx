import { newSpecPage } from '@stencil/core/testing';
import { VtmnButton } from '../vtmn-button';

describe('vtmn-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VtmnButton],
      html: `<vtmn-button></vtmn-button>`,
    });
    expect(page.root).toEqualHtml(`
      <vtmn-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vtmn-button>
    `);
  });
});
