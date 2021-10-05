import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-toggle',
  styleUrl: 'vtmn-toggle.pcss',
})
export class VtmnToggle implements ComponentInterface {
  /**
   * The id of the toggle and its label.
   * @default 'my-toggle'
   */
  @Prop() identifier: string = 'my-toggle';

  /**
   * The text of the toggle.
   * @default 'Your label'
   */
  @Prop({ attribute: 'labeltext' }) labelText: string = 'Your label';

  /**
   * The size of the toggle.
   * @default 'medium'
   */
  @Prop() size: 'small' | 'medium' = 'medium';

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
