import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-toggle',
  styleUrl: 'vtmn-toggle.pcss',
  shadow: true,
})
export class VtmnToggle {
  /**
   * The checked state of the toggle.
   * @default false
   */
  @Prop() checked: boolean = false;

  /**
   * The disabled state of the toggle.
   * @default false
   */
  @Prop() disabled: boolean = false;

  /**
   * The size of the toggle.
   * @default 'medium'
   */
  @Prop() size: 'small' | 'medium' = 'medium';

  render() {
    return (
      <div class={'vtmn-toggle ' + `vtmn-toggle_size--${this.size}`}>
        <div class="vtmn-toggle_switch">
          <input
            type="checkbox"
            id="your-choice"
            checked={this.checked}
            disabled={this.disabled}
          />
          <span aria-hidden="true"></span>
        </div>
        <label htmlFor="your-choice">
          <slot></slot>
        </label>
      </div>
    );
  }
}
