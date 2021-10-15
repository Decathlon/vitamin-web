import { Component, Prop, h, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'vtmn-text-input',
  styleUrl: 'vtmn-text-input.pcss',
})
export class VtmnTextInput implements ComponentInterface {
  /**
   * The id of the text input.
   * @type {string}
   * @defaultValue undefined
   */
  @Prop() identifier!: string;

  /**
   * The placeholder of the text input.
   * @type {string}
   * @defaultValue 'My placeholder'
   */
  @Prop() placeholder?: string = 'My placeholder';

  /**
   * The helper text of the text input.
   * @type {string}
   * @defaultValue 'Helper text goes here'
   */
  @Prop({ attribute: 'helpertext' }) helperText?: string =
    'Helper text goes here';

  /**
   * Is the text-input multiline or not.
   * @type {boolean}
   * @defaultValue false
   */
  @Prop() textarea?: boolean = false;

  /**
   * The valid variant state of the text-input.
   * @type {string}
   * @defaultValue 'default'
   */
  @Prop() state?: 'default' | 'valid' | 'error' = 'default';

  /**
   * The disabled state of the text-input.
   * @type {boolean}
   * @defaultValue false
   */
  @Prop() disabled?: boolean = false;

  /**
   * The icon to be displayed
   * @type {VitamixId}
   * @defaultValue undefined
   */
  @Prop() icon?: string;

  render() {
    return (
      <Host>
        <label class="vtmn-text-input_label" htmlFor={this.identifier}>
          <slot />
        </label>

        {this.textarea
          ? [
              <textarea
                class={[
                  'vtmn-text-input',
                  this.state !== 'default' && `vtmn-text-input--${this.state}`,
                ]
                  .filter(Boolean)
                  .join(' ')}
                id={this.identifier}
                placeholder={this.placeholder}
                disabled={this.disabled}
              ></textarea>,
              <p
                class={[
                  'vtmn-text-input_helper-text',
                  this.state === 'error' &&
                    'vtmn-text-input_helper-text--error',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {this.helperText}
              </p>,
            ]
          : [
              <div class="vtmn-text-input_container">
                <input
                  type="text"
                  class={[
                    'vtmn-text-input',
                    this.state !== 'default' &&
                      `vtmn-text-input--${this.state}`,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  id={this.identifier}
                  placeholder={this.placeholder}
                  disabled={this.disabled}
                />
                {this.icon ? <span class={`vtmx-${this.icon}`}></span> : null}
              </div>,
              <p
                class={[
                  'vtmn-text-input_helper-text',
                  this.state === 'error' &&
                    'vtmn-text-input_helper-text--error',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {this.helperText}
              </p>,
            ]}
      </Host>
    );
  }
}
