import * as React from 'react';
import '@vtmn/css-button/dist/index-with-vars.css';
import { VtmnButtonVariant, VtmnButtonSize } from './types';
import { VtmnIcon } from '../VtmnIcon';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

export interface VtmnButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * The variant of the button.
   * @default 'primary'
   */
  variant?: VtmnButtonVariant;
  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: VtmnButtonSize;

  /**
   * Icon to display on the left hand side of button
   * @type {VitamixId}
   * @default undefined and therefore not displayed by default
   */
  iconLeft?: VitamixId;

  /**
   * Icon to display on the right hand side of button
   * @type {VitamixId}
   * @default undefined and therefore not displayed by default
   */
  iconRight?: VitamixId;

  /**
   * Icon to display when it is a button with icon only
   * @type {VitamixId}
   * @default undefined and therefore not displayed by default
   */
  iconAlone?: VitamixId;
}

export const VtmnButton = React.forwardRef<HTMLButtonElement, VtmnButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      iconLeft,
      iconRight,
      iconAlone,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={`vtmn-btn vtmn-btn_variant--${variant} vtmn-btn_size--${size} ${
          className ? className : ''
        } ${!iconAlone && iconLeft ? 'vtmn-btn--icon-left' : ''} ${
          !iconAlone && iconRight ? 'vtmn-btn--icon-right' : ''
        } ${iconAlone ? 'vtmn-btn--icon-alone' : ''}`}
        {...props}
      >
        {!iconAlone && iconLeft && (
          <VtmnIcon
            value={iconLeft}
            style={{ color: 'inherit', fontSize: 'inherit' }}
          />
        )}
        {iconAlone ? (
          <VtmnIcon
            value={iconAlone}
            style={{ color: 'inherit', fontSize: 'inherit' }}
          />
        ) : (
          children
        )}
        {!iconAlone && iconRight && (
          <VtmnIcon
            value={iconRight}
            style={{ color: 'inherit', fontSize: 'inherit' }}
          />
        )}
      </button>
    );
  },
);

const MemoVtmnButton = React.memo(VtmnButton);

MemoVtmnButton.displayName = 'VtmnButton';

export default MemoVtmnButton;
