import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vtmn/css-button/dist/index-with-vars.css';

/**
 * A button element.
 *
 * @slot - This element has a slot
 */
@customElement('vtmn-button')
export class VtmnButton extends LitElement {
  render() {
    return html`
      <button class="vtmn-btn">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vtmn-button': VtmnButton;
  }
}
