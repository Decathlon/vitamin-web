import { Component, Prop, h, ComponentInterface } from '@stencil/core';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

@Component({
  tag: 'vtmn-text-input',
  styleUrl: 'vtmn-text-input.pcss',
})
export class VtmnTextInput implements ComponentInterface {
  /**
   * The id of the text input.
   * @default 'my-input'
   */
  @Prop() identifier: string = 'my-input';

  /**
   * The label text of the text input.
   * @default 'My label'
   */
  @Prop({ attribute: 'labeltext' }) labelText: string = 'My label';

  /**
   * The placeholder of the text input.
   * @default 'My placeholder'
   */
  @Prop() placeholder: string = 'My placeholder';

  /**
   * The helper text of the text input.
   * @default 'Helper text goes here'
   */
  @Prop({ attribute: 'helpertext' }) helperText: string =
    'Helper text goes here';

  /**
   * Is the text-input multiline or not.
   * @default false
   */
  @Prop() multiline: boolean = false;

  /**
   * The variant state of the text-input.
   * @default 'default'
   */
  @Prop() variant: 'default' | 'error' | 'valid' = 'default';

  /**
   * The disabled state of the text-input.
   * @default false
   */
  @Prop() disabled: boolean;

  /**
   * The icon to be displayed
   * @default undefined
   */
  @Prop() icon: VitamixId;

  render() {
    return [
      <label class="vtmn-text-input_label" htmlFor={this.identifier}>
        {this.labelText}
      </label>,

      this.multiline
        ? [
            <textarea
              class={[
                'vtmn-text-input',
                this.variant == 'error' && 'vtmn-text-input--error',
                this.variant == 'valid' && 'vtmn-text-input--valid',
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
                this.variant == 'error' && 'vtmn-text-input_helper-text--error',
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
                  this.variant == 'valid' && 'vtmn-text-input--valid',
                  this.variant == 'error' && 'vtmn-text-input--error',
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
                this.variant == 'error' && 'vtmn-text-input_helper-text--error',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {this.helperText}
            </p>,
          ],
    ];
  }
}
