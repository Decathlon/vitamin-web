import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-badge',
  styleUrl: 'vtmn-badge.pcss',
})
export class VtmnBadge {
  /**
   * The variant of the badge.
   */
  @Prop() variant: 'default' | 'brand' | 'reversed' | 'accent' | null;

  /**
   * The text of the badge.
   */
  @Prop({ attribute: 'labeltext' }) labelText: string;

  /**
   * The value of the badge.
   */
  @Prop() value: string;

  /**
   * The size of the badge.
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * The icon of the badge
   */
  @Prop() icon: string;

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
        {this.icon ? (
          <span class={this.icon} aria-label={this.labelText}>
            <div class="vtmn-badge_container">
              {this.size != 'small' ? `${this.value}` : ''}
            </div>
          </span>
        ) : (
          <span>
            {this.labelText}
            <div class="vtmn-badge_container">{this.value}</div>
          </span>
        )}
      </div>
    );
  }
}
