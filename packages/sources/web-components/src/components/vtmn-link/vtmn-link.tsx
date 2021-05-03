import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-link',
  styleUrl: 'vtmn-link.pcss',
})
export class VtmnLink {
  /**
   * The size of the link.
   * @default null
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * Is the link standalone or not
   * @default null
   */
  @Prop({ attribute: 'isstandalone' }) isStandalone: boolean;

  /**
   * The hypertext link
   * @default '#'
   */
  @Prop() href: string = '#';

  /**
   * The target of the link
   * @default null
   */
  @Prop() target: string;

  render() {
    return (
      <a
        href={this.href}
        target={this.target}
        class={[
          'vtmn-link',
          `vtmn-link_size--${this.size}`,
          this.isStandalone && 'vtmn-link--standalone',
        ]
          .filter(Boolean)
          .join(' ')}>
        <slot></slot>
      </a>
    );
  }
}
