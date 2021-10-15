import { Component, Prop, h, ComponentInterface } from '@stencil/core';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

@Component({
  tag: 'vtmn-button',
  styleUrl: 'vtmn-button.pcss',
})
export class VtmnButton implements ComponentInterface {
  /**
   * The variant of the button.
   * @type {string}
   * @defaultValue 'primary'
   */
  @Prop() variant?:
    | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'ghost-reversed'
    | 'conversion' = 'primary';

  /**
   * The size of the button.
   * @type {string}
   * @defaultValue 'medium'
   */
  @Prop() size?: 'small' | 'medium' | 'large' | 'stretched' = 'medium';

  /**
   * The size of the button.
   * @type {string}
   * @defaultValue 'Button'
   */
  @Prop() label?: string = 'Button';

  /**
   * Icon to display on the left hand side of button
   * @type {VitamixId}
   * @defaultValue undefined
   */
  @Prop({ attribute: 'iconleft' }) iconLeft?: VitamixId;

  /**
   * Icon to display on the right hand side of button
   * @type {VitamixId}
   * @defaultValue undefined
   */
  @Prop({ attribute: 'iconright' }) iconRight?: VitamixId;

  /**
   * Icon to display when it is a button with icon only
   * @type {VitamixId}
   * @defaultValue undefined
   */
  @Prop({ attribute: 'iconalone' }) iconAlone?: VitamixId;

  render() {
    return (
      <button
        class={`vtmn-btn vtmn-btn_variant--${this.variant} vtmn-btn_size--${
          this.size
        }
        ${!this.iconAlone && this.iconLeft ? 'vtmn-btn--icon-left' : ''} ${
          !this.iconAlone && this.iconRight ? 'vtmn-btn--icon-right' : ''
        } ${this.iconAlone ? 'vtmn-btn--icon-alone' : ''}`}
        type="button"
      >
        {!this.iconAlone && this.iconLeft && (
          <span class={`vtmx-${this.iconLeft}`}></span>
        )}
        {this.iconAlone ? (
          <span class={`vtmx-${this.iconAlone}`}></span>
        ) : (
          this.label
        )}
        {!this.iconAlone && this.iconRight && (
          <span class={`vtmx-${this.iconRight}`}></span>
        )}
      </button>
    );
  }
}
