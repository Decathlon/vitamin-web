import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-text-input',
  styleUrl: 'vtmn-text-input.pcss',
})
export class VtmnTextInput implements ComponentInterface {
  /**
   * The id of the text input.
   */
  @Prop() identifier!: string;

  /**
   * The label text of the text input.
   */
  @Prop({ attribute: 'labeltext' }) labelText!: string;

  /**
   * The placeholder of the text input.
   */
  @Prop() placeholder!: string;

  /**
   * The helper text of the text input.
   */
  @Prop({ attribute: 'helpertext' }) helperText!: string;

  /**
   * Is the text-input multiline or not.
   */
  @Prop() multiline: boolean;

  /**
   * The valid variant state of the text-input.
   */
  @Prop() valid: boolean;

  /**
   * The error variant state of the text-input.
   */
  @Prop() error: boolean;

  /**
   * The disabled state of the text-input.
   */
  @Prop() disabled: boolean;

  /**
   * The icon to be displayed
   */
  @Prop() icon: string;

  render() {
    return [
      <label class="vtmn-text-input_label" htmlFor={this.identifier}>
        {this.labelText}
      </label>,

      this.multiline
        ? [
            <textarea
              class={['vtmn-text-input', this.error && 'vtmn-text-input--error']
                .filter(Boolean)
                .join(' ')}
              id={this.identifier}
              placeholder={this.placeholder}
              disabled={this.disabled}></textarea>,
            this.error ? (
              <p
                class={[
                  'vtmn-text-input_helper-text',
                  this.error && 'vtmn-text-input_helper-text--error',
                ]
                  .filter(Boolean)
                  .join(' ')}>
                {this.helperText}
              </p>
            ) : null,
          ]
        : [
            <div class="vtmn-text-input_container">
              <input
                type="text"
                class={[
                  'vtmn-text-input',
                  this.valid && 'vtmn-text-input--valid',
                  this.error && 'vtmn-text-input--error',
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
                this.error && 'vtmn-text-input_helper-text--error',
              ]
                .filter(Boolean)
                .join(' ')}>
              {this.helperText}
            </p>,
          ],
    ];
  }
}
