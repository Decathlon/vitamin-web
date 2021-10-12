import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-link',
  styleUrl: 'vtmn-link.pcss',
})
export class VtmnLink implements ComponentInterface {
  /**
   * The size of the link.
   * @defaultValue undefined
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * Is the link standalone or not
   * @defaultValue undefined
   */
  @Prop() standalone: boolean;

  /**
   * Is the link has an icon or not
   * @defaultValue undefined
   */
  @Prop({ attribute: 'iconalong' }) iconAlong: boolean;

  /**
   * The hypertext link
   * @defaultValue '#'
   */
  @Prop() href: string = '#';

  /**
   * The target of the link
   * @defaultValue null
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
