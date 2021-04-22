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

  render() {
    return (
      <a
        class={
          'vtmn-link ' +
          `vtmn-link_size--${this.size} ` +
          (this.standalone ? 'vtmn-link--standalone' : '')
        }
        href="#"
        target="_blank">
        Click here
      </a>
    );
  }
}
