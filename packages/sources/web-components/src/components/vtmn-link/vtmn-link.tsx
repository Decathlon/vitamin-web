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
  @Prop() standalone: boolean = false;

  /**
   * The hypertext link
   * @default '#'
   */
  @Prop() href: string = '#';

  /**
   * The target of the link
   * @default '_blank'
   */
  @Prop() target: string = '_target';

  render() {
    return (
      <a
        class={
          'vtmn-link ' +
          `vtmn-link_size--${this.size} ` +
          (this.standalone ? 'vtmn-link--standalone' : '')
        }
        href={this.href}
        target={this.target}>
        Link
      </a>
    );
  }
}
