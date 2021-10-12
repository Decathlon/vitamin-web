import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-badge',
  styleUrl: 'vtmn-badge.pcss',
})
export class VtmnBadge implements ComponentInterface {
  /**
   * The variant of the badge.
   * @default 'default'
   */
  @Prop() variant?: 'default' | 'brand' | 'reversed' | 'accent' = 'default';

  /**
   * The value in the badge
   * @type {number}
   * @default 50
   */
  @Prop() value?: number = 50;

  render() {
    return (
      <span
        class={`vtmn-badge vtmn-badge_variant--${this.variant}
        ${
          !this.value && this.value <= 0 ? 'vtmn-badge_size--without-value' : ''
        }`}
      >
        {this.value && this.value > 99
          ? '99+'
          : this.value <= 0
          ? null
          : this.value}
      </span>
    );
  }
}
