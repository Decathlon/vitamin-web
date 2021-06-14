import { Component, Prop, h, Host, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-radio',
  styleUrl: 'vtmn-radio.pcss',
})
export class VtmnRadio implements ComponentInterface {
  /**
   * The id of the radio and its label.
   */
  @Prop() identifier!: string;

  /**
   * The text of the radio.
   */
  @Prop({ attribute: 'labeltext' }) labelText: string;

  /**
   * The name of the radio.
   */
  @Prop() name: string;

  /**
   * The value of the radio.
   */
  @Prop() value: string;

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
      <Host>
        <input
          class="vtmn-radio-button"
          type="radio"
          id={this.identifier}
          name={this.name}
          value={this.value}
          checked={this.isChecked}
          disabled={this.isDisabled}
        />
        <label htmlFor={this.identifier}>{this.labelText}</label>
      </Host>
    );
  }
}
