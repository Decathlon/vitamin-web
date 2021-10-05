import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'vtmn-snackbar',
  styleUrl: 'vtmn-snackbar.pcss',
})
export class VtmnSnackbar implements ComponentInterface {
  /**
   * Display a button in the snackbar
   * @default false
   */
  @Prop({ attribute: 'withbutton' }) withButton: boolean = false;

  /**
   * The label of the snackbar button
   * @default undefined
   */
  @Prop({ attribute: 'buttonlabel' }) buttonLabel: String = undefined;

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
