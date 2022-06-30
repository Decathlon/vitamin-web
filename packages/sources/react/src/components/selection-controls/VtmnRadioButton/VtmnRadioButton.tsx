import * as React from 'react';
import '@vtmn/css-radio-button/dist/index-with-vars.css';

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

export const VtmnRadioButton = ({
  identifier,
  labelText,
  checked = false,
  defaultChecked = undefined,
  disabled = false,
  ...props
}: VtmnRadioButtonProps) => {
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
        {...props}
      />
      <label htmlFor={identifier}>{labelText}</label>
    </div>
  );
};

const MemoVtmnRadioButton = React.memo(VtmnRadioButton);

MemoVtmnRadioButton.displayName = 'VtmnRadioButton';

export default MemoVtmnRadioButton;
