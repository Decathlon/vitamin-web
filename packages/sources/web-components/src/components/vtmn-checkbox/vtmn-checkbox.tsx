import { Component, Prop, h, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'vtmn-checkbox',
  styleUrl: 'vtmn-checkbox.pcss',
})
export class VtmnCheckbox implements ComponentInterface {
  /**
   * The id of the checkbox and its label.
   */
  @Prop() identifier!: string;

  /**
   * The value of the checkbox.
   */
  @Prop() value: string;

  /**
   * The name of the checkbox.
   */
  @Prop() name: string;

  /**
   * The text of the checkbox.
   */
  @Prop({ attribute: 'labeltext' }) labelText: string;

  /**
   * The disabled state of the checkbox.
   * @defaultValue false
   */
  @Prop() disabled: boolean;

  /**
   * The checked state of the checkbox.
   * @defaultValue false
   */
  @Prop() checked: boolean;

  render() {
    return (
      <Host>
        <input
          class="vtmn-checkbox"
          type="checkbox"
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
