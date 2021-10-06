import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-snackbar',
  styleUrl: 'vtmn-snackbar.pcss',
})
export class VtmnSnackbar implements ComponentInterface {
  /**
   * The label of the snackbar button
   * @type {string}
   * @default undefined
   */
  @Prop({ attribute: 'buttonlabel' }) buttonLabel: string;

  render() {
    return (
      <div class="vtmn-snackbar">
        <div class="vtmn-snackbar_content">
          <slot />
        </div>
        {this.buttonLabel ? (
          <button class="vtmn-btn vtmn-btn_variant--secondary vtmn-btn_size--small">
            {this.buttonLabel}
          </button>
        ) : null}
      </div>
    );
  }
}
