import { Component, Prop, h, Host, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-radio-button',
  styleUrl: 'vtmn-radio-button.pcss',
})
export class VtmnRadioButton implements ComponentInterface {
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
   * @defaultValue false
   */
  @Prop() checked: boolean;

  /**
   * The disabled state of the radio.
   * @defaultValue false
   */
  @Prop() disabled: boolean;

  render() {
    return (
      <Host>
        <input
          class="vtmn-radio-button"
          type="radio"
          id={this.identifier}
          name={this.name}
          value={this.value}
          checked={this.checked}
          disabled={this.disabled}
        />
        <label htmlFor={this.identifier}>{this.labelText}</label>
      </Host>
    );
  }
}
