import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-select',
  styleUrl: 'vtmn-select.pcss',
})
export class VtmnSelect implements ComponentInterface {
  /**
   * The id of the select.
   * @type {string}
   * @default undefined
   */
  @Prop() identifier!: string;

  /**
   * The label text of the select.
   * @type {string}
   * @default undefined
   */
  @Prop({ attribute: 'labeltext' }) labelText!: string;

  /**
   * The placeholder of the select.
   * @type {string}
   * @default 'Error text goes here'
   */
  @Prop({ attribute: 'errortext' }) errorText: string = 'Error text goes here';

  /**
   * The helper text of the select in error.
   * @type {string}
   * @default 'Select an option'
   */
  @Prop() placeholder: string = 'Select an option';

  /**
   * The state of the select when disabled
   * @type {boolean}
   * @default false
   */
  @Prop() disabled: boolean = false;

  /**
   * The state of the select when in error
   * @type {boolean}
   * @default false
   */
  @Prop() error: boolean = false;

  render() {
    return (
      <div class="vtmn-select_container">
        {this.labelText ? (
          <label htmlFor={this.identifier}>{this.labelText}</label>
        ) : null}

        <select
          name="sports"
          id={this.identifier}
          class={this.error ? 'vtmn-select--error' : ''}
          autocomplete="true"
          disabled={this.disabled}
        >
          {this.placeholder ? (
            <option value="" disabled selected>
              {this.placeholder}
            </option>
          ) : null}
          <slot />
        </select>
        {this.error && this.errorText ? (
          <p class="vtmn-select_error-text">{this.errorText}</p>
        ) : null}
      </div>
    );
  }
}
