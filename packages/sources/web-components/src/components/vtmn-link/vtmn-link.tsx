import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-link',
  styleUrl: 'vtmn-link.pcss',
  shadow: true,
})
export class VtmnLink {
  /**
   * The variant of the link.
   * @type {boolean}
   * @default false
   */
  @Prop() isStandalone: boolean = false;

  /**
   * The size of the link.
   * @default 'medium'
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  render() {
    return (
      <a
        href="#"
        target="_blank"
        class={`vtmn-btn vtmn-btn_size--${this.size}`}></a>
    );
  }
}
