import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-toggle',
  styleUrl: 'vtmn-toggle.pcss',
})
export class VtmnToggle implements ComponentInterface {
  /**
   * The id of the toggle and its label.
   */
  @Prop() identifier!: string;

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
  @Prop() checked: boolean;

  /**
   * The disabled state of the toggle.
   * @default false
   */
  @Prop() disabled: boolean;

  render() {
    return (
      <div class={['vtmn-toggle', `vtmn-toggle_size--${this.size}`].join(' ')}>
        <div class="vtmn-toggle_switch">
          <input
            type="checkbox"
            id={this.identifier}
            checked={this.checked}
            disabled={this.disabled}
          />
          <span aria-hidden="true"></span>
        </div>
        <label htmlFor={this.identifier}>{this.labelText}</label>
      </div>
    );
  }
}
