import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-badge',
  styleUrl: 'vtmn-badge.pcss',
})
export class VtmnBadge implements ComponentInterface {
  /**
   * The variant of the badge.
   * @default undefined
   */
  @Prop() variant?: 'default' | 'brand' | 'reversed' | 'accent';

  /**
   * The size of the badge.
   * @default undefined
   */
  @Prop() size?: 'small' | 'medium';

  /**
   * The target of the badge
   * @default undefined
   */
  @Prop() value?: string;

  render() {
    return (
      <div
        class={[
          'vtmn-badge',
          this.size && `vtmn-badge_size--${this.size}`,
          this.variant && `vtmn-badge_variant--${this.variant}`,
        ]
          .filter(Boolean)
          .join(' ')}>
        {this.size != 'small' && this.value ? this.value : null}
      </div>
    );
  }
}
