import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-link',
  styleUrl: 'vtmn-link.pcss',
})
export class VtmnLink implements ComponentInterface {
  /**
   * The size of the link.
   * @default null
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * Is the link standalone or not
   * @default null
   */
  @Prop() standalone: boolean;

  /**
   * Is the link has an icon or not
   * @default null
   */
  @Prop({ attribute: 'iconalong' }) iconAlong: boolean;

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
          this.standalone && 'vtmn-link--standalone',
          this.standalone && this.iconAlong && 'vtmn-link--icon-along',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <slot></slot>
      </a>
    );
  }
}
