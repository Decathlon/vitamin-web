import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-link',
  styleUrl: 'vtmn-link.pcss',
})
export class VtmnLink implements ComponentInterface {
  /**
   * The hypertext link
   * @type {string}
   * @defaultValue '#'
   */
  @Prop() href: string = '#';

  /**
   * The target of the link
   * @type {string}
   * @defaultValue '_self'
   */
  @Prop() target?: string = '_self';

  /**
   * The size of the link
   * @type {string}
   * @defaultValue 'medium'
   */
  @Prop() size?: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Whether the link is standalone
   * @type {boolean}
   * @defaultValue false
   */
  @Prop() standalone?: boolean = false;

  /**
   * Whether the link has an icon
   * @type {boolean}
   * @defaultValue false
   */
  @Prop({ attribute: 'withicon' }) withIcon: boolean = false;

  render() {
    return (
      <a
        href={this.href}
        target={this.target}
        class={[
          'vtmn-link',
          `vtmn-link_size--${this.size}`,
          this.standalone && 'vtmn-link--standalone',
          this.standalone && this.withIcon && 'vtmn-link--icon-along',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <slot></slot>
      </a>
    );
  }
}
