import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-text-input',
  styleUrl: 'vtmn-text-input.pcss',
  shadow: true,
})
export class VtmnTextInput {
  /**
   * The id of the text input.
   * @default 'my-id'
   */
  @Prop() id: string = 'my-id';

  /**
   * Is the text-input multiline or not.
   * @default false
   */
  @Prop({ attribute: 'ismultiline' }) isMultiline: boolean = false;

  /**
   * The state of the text-input.
   * @default null
   */
  @Prop() state: 'valid' | 'error' | null = null;

  /**
   * The disabled state of the text-input.
   * @default false
   */
  @Prop({ attribute: 'isdisabled' }) isDisabled: boolean = false;

  /**
   * The icon to be displayed
   * @default ''
   */
  @Prop() icon: string = '';

  render() {
    if (this.isMultiline) {
      return [
        <label class="vtmn-text-input_label" htmlFor="my-label">
          <slot></slot>
        </label>,

        <textarea
          class={[
            'vtmn-text-input',
            this.state != null && `vtmn-text-input--${this.state}`,
          ]
            .filter(Boolean)
            .join(' ')}
          id="my-text-input-multiline"
          placeholder="Placeholder Text"
          disabled={this.isDisabled}></textarea>,

        <p
          class={[
            'vtmn-text-input_helper-text',
            this.state != null && `vtmn-text-input_helper-text--${this.state}`,
          ]
            .filter(Boolean)
            .join(' ')}>
          Helper text goes here
        </p>,
      ];
    } else {
      return [
        <label class="vtmn-text-input_label" htmlFor="my-label">
          <slot></slot>
        </label>,

        <div class="vtmn-text-input_container">
          <input
            type="text"
            class={[
              'vtmn-text-input',
              this.state != null && `vtmn-text-input--${this.state}`,
            ]
              .filter(Boolean)
              .join(' ')}
            id="my-label"
            placeholder="Placeholder Text"
            disabled={this.isDisabled}
          />
          {this.icon != '' ? <span class="vtmx-search-line"></span> : null}
        </div>,

        <p
          class={[
            'vtmn-text-input_helper-text',
            this.state != null && `vtmn-text-input_helper-text--${this.state}`,
          ]
            .filter(Boolean)
            .join(' ')}>
          Helper text goes here
        </p>,
      ];
    }
  }
}
