import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-link',
  styleUrl: 'vtmn-link.pcss',
  shadow: true,
})
export class VtmnLink {
  /**
   * The size of the link.
   * @default 'medium'
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Is the link standalone or not
   * @default false
   */
  @Prop({ attribute: 'isstandalone' }) isStandalone: boolean = false;

  /**
   * The hypertext link
   * @default '#'
   */
  @Prop() href: string = '#';

  /**
   * The target of the link
   * @default '_self'
   */
  @Prop() target: string = '_self';

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
