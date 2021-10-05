import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-snackbar',
  styleUrl: 'vtmn-snackbar.pcss',
})
export class VtmnSnackbar implements ComponentInterface {
  /**
   * The label of the snackbar button
   * @default false
   */
  @Prop({ attribute: 'withbutton' }) withButton: boolean;

  /**
   * The label of the snackbar button
   * @default null
   */
  @Prop({ attribute: 'buttonlabel' }) buttonLabel: String;

  render() {
    return (
      <div class="vtmn-snackbar">
        <div class="vtmn-snackbar_content">
          <slot />
        </div>
        {this.withButton ? (
          <button class="vtmn-btn vtmn-btn_variant--secondary vtmn-btn_size--small">
            {this.buttonLabel}
          </button>
        ) : null}
      </div>
    );
  }
}
