import * as React from 'react';
import '@vtmn/css-radio-button';

export interface VtmnRadioButtonProps
  extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * The id of the radio.
   * @type {string}
   */
  identifier: string;

  /**
   * The label of the radio.
   * @type {string}
   * @defaultValue undefined
   */
  labelText?: string;

  /**
   * The checked state of the radio.
   * @type {boolean}
   * @defaultValue false
   */
  checked?: boolean;

  /**
   * The default checked state of the radio (for uncontrolled mode combined with a "name" attribute).
   * @type {boolean}
   * @defaultValue undefined
   */
  defaultChecked?: boolean;

  /**
   * The disabled state of the radio.
   * @type {boolean}
   * @defaultValue false
   */
  disabled?: boolean;
}

export const VtmnRadioButton = React.forwardRef<
  HTMLInputElement,
  VtmnRadioButtonProps
>(
  (
    {
      identifier,
      labelText,
      checked = false,
      defaultChecked = undefined,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div>
        <input
          className="vtmn-radio-button"
          type="radio"
          id={identifier}
          {...(typeof defaultChecked !== 'undefined'
            ? { defaultChecked }
            : { checked })}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <label htmlFor={identifier}>{labelText}</label>
      </div>
    );
  },
);
const MemoVtmnRadioButton = React.memo(VtmnRadioButton);

MemoVtmnRadioButton.displayName = 'VtmnRadioButton';

export default MemoVtmnRadioButton;
