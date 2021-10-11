import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-loader',
  styleUrl: 'vtmn-loader.pcss',
})
export class VtmnLoader implements ComponentInterface {
  /**
   * The size of the toggle.
   * @type {string}
   * @default 'medium'
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  render() {
    return (
      <div
        class={['vtmn-loader', `vtmn-loader_size--${this.size}`].join(' ')}
      ></div>
    );
  }
}
