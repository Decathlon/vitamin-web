import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-button',
  styleUrl: 'vtmn-button.pcss',
  shadow: true,
})
export class VtmnButton {
  @Prop() variant:
    | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion' = 'primary';

  @Prop() size: 'small' | 'medium' | 'large' | 'stretched' = 'medium';

  render() {
    return (
      <button
        class={`vtmn-btn vtmn-btn_variant--${this.variant} vtmn-btn_size--${this.size}`}
        type="button">
        <slot></slot>
      </button>
    );
  }
}
