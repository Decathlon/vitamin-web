import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { VtmnButtonVariant, VtmnButtonSize } from './types';
import styles from '@vtmn/css-button/dist/index-with-vars.css';

/**
 * A button element.
 *
 * @prop {String} variant - Sets the variant of the button
 * @slot - This element has a slot
 */
@customElement('vtmn-button')
export class VtmnButton extends LitElement {
  /** The button's variant. */
  @property({ type: String, reflect: true })
  variant: VtmnButtonVariant = 'primary';

  /** The button's size. */
  @property({ type: String, reflect: true })
  size: VtmnButtonSize = 'medium';

  render() {
    return html`
      <button
        class=${classMap({
          'vtmn-btn': true,
          'vtmn-btn_variant--primary': this.variant === 'primary',
          'vtmn-btn_variant--primary-reversed':
            this.variant === 'primary-reversed',
          'vtmn-btn_variant--secondary': this.variant === 'secondary',
          'vtmn-btn_variant--tertiary': this.variant === 'tertiary',
          'vtmn-btn_variant--conversion': this.variant === 'conversion',
          'vtmn-btn_variant--ghost': this.variant === 'ghost',
          'vtmn-btn_variant--ghost-reversed': this.variant === 'ghost-reversed',
          'vtmn-btn_size--small': this.size === 'small',
          'vtmn-btn_size--medium': this.size === 'medium',
          'vtmn-btn_size--large': this.size === 'large',
          'vtmn-btn_size--stretched': this.size === 'stretched',
        })}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
  }

  static styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'vtmn-button': VtmnButton;
  }
}
