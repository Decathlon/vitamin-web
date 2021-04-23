import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-toggle',
  styleUrl: 'vtmn-toggle.pcss',
  shadow: true,
})
export class VtmnButton {
  /**
   * The size of the toggle.
   * @default 'medium'
   */
  @Prop() size: 'small' | 'medium' = 'medium';

  render() {
    return (
      <div class="vtmn-toggle vtmn-toggle_size--medium">
        <div class="vtmn-toggle_switch">
          <input type="checkbox" id="your-choice" />
          <span aria-hidden="true"></span>
        </div>
        <label htmlFor="your-choice">
          <slot></slot>
        </label>
      </div>
    );
  }
}
