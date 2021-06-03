import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-checkbox',
  styleUrl: 'vtmn-checkbox.pcss',
})
export class VtmnCheckbox {
  /**
   * The id of the checkbox and its label.
   */
  @Prop() id!: string;

  /**
   * The text of the checkbox.
   */
  @Prop({ attribute: 'labeltext' }) labelText!: string;

  /**
   * The name of the checkbox.
   */
  @Prop({ attribute: 'nametext' }) nameText!: string;

  /**
   * The value of the checkbox.
   */
  @Prop({ attribute: 'valuetext' }) valueText: string;

  /**
   * The checked state of the checkbox.
   * @default false
   */
  @Prop({ attribute: 'checked' }) isChecked: boolean;

  /**
   * The disabled state of the checkbox.
   * @default false
   */
  @Prop({ attribute: 'disabled' }) isDisabled: boolean;

  render() {
    return (
      <div>
        <input
          class="vtmn-checkbox"
          type="checkbox"
          id={this.id}
          name={this.nameText}
          value={this.valueText}
          checked={this.isChecked}
          disabled={this.isDisabled}
        />
        <label htmlFor={this.id}>{this.labelText}</label>
      </div>
    );
  }
}
