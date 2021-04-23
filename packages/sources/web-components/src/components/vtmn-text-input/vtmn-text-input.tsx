import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'vtmn-text-input',
  styleUrl: 'vtmn-text-input.pcss',
  shadow: true,
})
export class VtmnTextInput {
  /**
   * The size of the text-input.
   * @default 'medium'
   */
  @Prop() size: 'small' | 'medium' | 'large' | 'stretched' = 'medium';

  render() {
    return [
      <label class="vtmn-text-input_label" htmlFor="my-default-input-1">
        Label
      </label>,
      <div class="vtmn-text-input_container">
        <input
          type="text"
          class="vtmn-text-input"
          id="my-default-input-1"
          placeholder="Placeholder Text"
        />
      </div>,
      <p class="vtmn-text-input_helper-text">Helper text goes here</p>,
    ];
  }
}
