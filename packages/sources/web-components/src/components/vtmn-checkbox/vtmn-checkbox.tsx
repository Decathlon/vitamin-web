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
   * The text of the checkbox.
   */
  @Prop({ attribute: 'labeltext' }) labelText: string;

  /**
   * The name of the checkbox.
   */
  @Prop() name: string;

  /**
   * The value of the checkbox.
   */
  @Prop() value: string;

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
      <Host>
        <input
          class="vtmn-checkbox"
          type="checkbox"
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
