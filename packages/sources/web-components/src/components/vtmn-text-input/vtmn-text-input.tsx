import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-text-input',
  styleUrl: 'vtmn-text-input.pcss',
})
export class VtmnTextInput {
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
  @Prop({ attribute: 'multiline' }) isMultiline: boolean;

  /**
   * The state of the text-input.
   */
  @Prop() state: 'valid' | 'error' | null;

  /**
   * The disabled state of the text-input.
   */
  @Prop({ attribute: 'disabled' }) isDisabled: boolean;

  /**
   * The icon to be displayed
   */
  @Prop() icon: string;

  render() {
    return [
      <label class="vtmn-text-input_label" htmlFor={this.identifier}>
        {this.labelText}
      </label>,

      this.isMultiline ? (
        <textarea
          class={[
            'vtmn-text-input',
            this.state && `vtmn-text-input--${this.state}`,
          ]
            .filter(Boolean)
            .join(' ')}
          id={this.identifier}
          placeholder={this.placeholder}
          disabled={this.isDisabled}></textarea>
      ) : (
        <div class="vtmn-text-input_container">
          <input
            type="text"
            class={[
              'vtmn-text-input',
              this.state && `vtmn-text-input--${this.state}`,
            ]
              .filter(Boolean)
              .join(' ')}
            id={this.identifier}
            placeholder={this.placeholder}
            disabled={this.isDisabled}
          />
          {this.icon ? <span class={this.icon}></span> : null}
        </div>
      ),
      <p
        class={[
          'vtmn-text-input_helper-text',
          this.state && `vtmn-text-input_helper-text--${this.state}`,
        ]
          .filter(Boolean)
          .join(' ')}>
        {this.helperText}
      </p>,
    ];
  }
}
