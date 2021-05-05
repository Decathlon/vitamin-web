import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-text-input',
  styleUrl: 'vtmn-text-input.pcss',
  shadow: false,
})
export class VtmnTextInput {
  /**
   * The id of the text input.
   */
  @Prop() id: string;

  /**
   * The label of the text input.
   */
  @Prop() label: string;

  /**
   * The placeholder of the text input.
   */
  @Prop() placeholder: string;

  /**
   * The helper of the text input.
   */
  @Prop() helper: string;

  /**
   * Is the text-input multiline or not.
   * @default
   */
  @Prop({ attribute: 'ismultiline' }) isMultiline: boolean;

  /**
   * The state of the text-input.
   * @default
   */
  @Prop() state: 'valid' | 'error' | null;

  /**
   * The disabled state of the text-input.
   * @default
   */
  @Prop({ attribute: 'isdisabled' }) isDisabled: boolean;

  /**
   * The icon to be displayed
   * @default
   */
  @Prop() icon: string;

  render() {
    if (this.isMultiline) {
      return [
        <label class="vtmn-text-input_label" htmlFor={this.id}>
          {this.label}
        </label>,

        <textarea
          class={[
            'vtmn-text-input',
            this.state && `vtmn-text-input--${this.state}`,
          ]
            .filter(Boolean)
            .join(' ')}
          id={this.id}
          placeholder={this.placeholder}
          disabled={this.isDisabled}></textarea>,

        <p
          class={[
            'vtmn-text-input_helper-text',
            this.state && `vtmn-text-input_helper-text--${this.state}`,
          ]
            .filter(Boolean)
            .join(' ')}>
          {this.helper}
        </p>,
      ];
    } else {
      return [
        <label class="vtmn-text-input_label" htmlFor={this.id}>
          {this.label}
        </label>,

        <div class="vtmn-text-input_container">
          <input
            type="text"
            class={[
              'vtmn-text-input',
              this.state && `vtmn-text-input--${this.state}`,
            ]
              .filter(Boolean)
              .join(' ')}
            id={this.id}
            placeholder={this.placeholder}
            disabled={this.isDisabled}
          />
          {this.icon ? <span class={this.icon}></span> : null}
        </div>,

        <p
          class={[
            'vtmn-text-input_helper-text',
            this.state && `vtmn-text-input_helper-text--${this.state}`,
          ]
            .filter(Boolean)
            .join(' ')}>
          {this.helper}
        </p>,
      ];
    }
  }
}
