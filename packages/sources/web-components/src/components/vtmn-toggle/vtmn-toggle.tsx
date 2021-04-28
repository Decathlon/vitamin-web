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
  @Prop({ attribute: 'checked' }) isChecked: boolean = false;

  /**
   * The disabled state of the toggle.
   * @default false
   */
  @Prop({ attribute: 'disabled' }) isDisabled: boolean = false;

  /**
   * The size of the toggle.
   * @default 'medium'
   */
  @Prop() size: 'small' | 'medium' = 'medium';

  render() {
    return (
      <div class={['vtmn-toggle', `vtmn-toggle_size--${this.size}`].join(' ')}>
        <div class="vtmn-toggle_switch">
          <input
            type="checkbox"
            id="your-choice"
            checked={this.isChecked}
            disabled={this.isDisabled}
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
