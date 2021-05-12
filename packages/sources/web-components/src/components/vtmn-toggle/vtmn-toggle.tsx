import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-toggle',
  styleUrl: 'vtmn-toggle.pcss',
})
export class VtmnToggle {
  /**
   * The id of the toggle and its label.
   */
  @Prop({ attribute: 'id' }) idText!: string;

  /**
   * The text of the toggle.
   */
  @Prop({ attribute: 'labeltext' }) labelText: string;

  /**
   * The size of the toggle.
   */
  @Prop() size: 'small' | 'medium';

  /**
   * The checked state of the toggle.
   * @default false
   */
  @Prop({ attribute: 'checked' }) isChecked: boolean;

  /**
   * The disabled state of the toggle.
   * @default false
   */
  @Prop({ attribute: 'disabled' }) isDisabled: boolean;

  render() {
    return (
      <div class={['vtmn-toggle', `vtmn-toggle_size--${this.size}`].join(' ')}>
        <div class="vtmn-toggle_switch">
          <input
            type="checkbox"
            id={this.idText}
            checked={this.isChecked}
            disabled={this.isDisabled}
          />
          <span aria-hidden="true"></span>
        </div>
        <label htmlFor={this.idText}>{this.labelText}</label>
      </div>
    );
  }
}
