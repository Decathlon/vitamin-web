import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-select',
  styleUrl: 'vtmn-select.pcss',
})
export class VtmnSelect implements ComponentInterface {
  /**
   * The id of the select.
   * @type {string}
   * @default 'vtmn-select'
   */
  @Prop() identifier!: string;

  /**
   * The label text of the select.
   * @type {string}
   * @default 'Label'
   */
  @Prop({ attribute: 'labeltext' }) labelText: string;

  /**
   * The placeholder of the select.
   * @type {string}
   * @default 'Error text goes here'
   */
  @Prop({ attribute: 'errortext' }) errorText: string;

  /**
   * The helper text of the select in error.
   * @type {string}
   * @default 'Select'
   */
  @Prop() placeholder: string;

  /**
   * The state of the select when disabled
   * @type {boolean}
   * @default false
   */
  @Prop() disabled: boolean;

  /**
   * The state of the select when in error
   * @type {boolean}
   * @default false
   */
  @Prop() error: boolean;

  render() {
    return (
      /*<button
        class={`vtmn-btn vtmn-btn_variant--${this.variant} vtmn-btn_size--${
          this.size
        }
        ${!this.iconAlone && this.iconLeft ? 'vtmn-btn--icon-left' : ''} ${
          !this.iconAlone && this.iconRight ? 'vtmn-btn--icon-right' : ''
        } ${this.iconAlone ? 'vtmn-btn--icon-alone' : ''}`}
        type="button">
        {this.iconLeft && <span class={`vtmx-${this.iconLeft}`}></span>}
        {this.iconAlone ? (
          <span class={`vtmx-${this.iconAlone}`}></span>
        ) : (
          <slot></slot>
        )}
        {this.iconRight && <span class={`vtmx-${this.iconRight}`}></span>}
      </button>
    );*/
      <div class="vtmn-select_container">
        <label htmlFor={this.identifier}>{this.labelText}</label>

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

          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
          <option value="option-6">Option 6</option>
        </select>
        {this.error && this.errorText ? (
          <p class="vtmn-select_error-text">{this.errorText}</p>
        ) : null}
      </div>
    );
  }
}
