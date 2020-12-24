import { newSpecPage } from '@stencil/core/testing';
import { VtmnButton } from '../vtmn-button';

describe('vtmn-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VtmnButton],
      html: `<vtmn-button>Click</vtmn-button>`,
    });
    expect(page.root).toEqualHtml(`
      <vtmn-button>
        <mock:shadow-root>
          <button>
            <slot></slot>
          </button>
        </mock:shadow-root>
        Click
      </vtmn-button>
    `);
  });
});
