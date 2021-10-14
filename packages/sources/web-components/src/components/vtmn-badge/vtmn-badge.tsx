import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-badge',
  styleUrl: 'vtmn-badge.pcss',
})
export class VtmnBadge implements ComponentInterface {
  /**
   * The variant of the badge.
   * @type {string}
   * @defaultValue 'default'
   */
  @Prop() variant?: 'default' | 'brand' | 'reversed' | 'accent' = 'default';

  /**
   * The value in the badge
   * @type {number}
   * @defaultValue 0
   */
  @Prop() value?: number = 0;

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
