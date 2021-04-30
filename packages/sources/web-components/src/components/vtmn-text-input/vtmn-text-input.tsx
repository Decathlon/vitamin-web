import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-text-input',
  styleUrl: 'vtmn-text-input.pcss',
  shadow: true,
})
export class VtmnTextInput {
  /**
   * The state of the text-input.
   * @default 'default'
   */
  @Prop() state: 'valid' | 'error' | 'default' = 'default';

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
    return [
      <label class="vtmn-text-input_label" htmlFor="my-label">
        <slot></slot>
      </label>,

      <div class="vtmn-text-input_container">
        <input
          type="text"
          class={[
            'vtmn-text-input',
            this.state != 'default' && `vtmn-text-input--${this.state}`,
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
          this.state != 'default' &&
            `vtmn-text-input_helper-text--${this.state}`,
        ]
          .filter(Boolean)
          .join(' ')}>
        Helper text goes here
      </p>,
    ];
  }
}
