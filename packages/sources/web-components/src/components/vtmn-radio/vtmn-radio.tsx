import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-radio',
  styleUrl: 'vtmn-radio.pcss',
})
export class VtmnRadio {
  /**
   * The id of the radio and its label.
   */
  @Prop() id!: string;

  /**
   * The text of the radio.
   */
  @Prop({ attribute: 'labeltext' }) labelText: string;

  /**
   * The name of the radio.
   */
  @Prop({ attribute: 'nametext' }) nameText: string;

  /**
   * The value of the radio.
   */
  @Prop({ attribute: 'valuetext' }) valueText: string;

  /**
   * The checked state of the radio.
   * @default false
   */
  @Prop({ attribute: 'checked' }) isChecked: boolean;

  /**
   * The disabled state of the radio.
   * @default false
   */
  @Prop({ attribute: 'disabled' }) isDisabled: boolean;

  render() {
    return (
      <div>
        <input
          class="vtmn-radio-button"
          type="radio"
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
