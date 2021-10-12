import * as React from 'react';

import '@vtmn/css-radio-button/dist/index-with-vars.css';

export interface VtmnRadioProps
  extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * ID of the radio.
   * @type {string}
   */
  identifier: string;

  /**
   * Label text linked to the radio.
   * @type {string}
   * @defaultValue undefined
   */
  labelText?: string;

  /**
   * Label text linked to the radio.
   * @type {boolean}
   * @defaultValue false
   */
  checked?: boolean;

  /**
   * Disabled state of the radio.
   * @type {boolean}
   */
  disabled?: boolean;
}

export const VtmnRadioButton = ({
  identifier,
  labelText,
  checked,
  disabled,
  ...props
}: VtmnRadioProps) => {
  return (
    <div>
      <input
        className="vtmn-radio-button"
        type="radio"
        id={identifier}
        defaultChecked={checked}
        disabled={disabled}
        {...props}
      />
      <label htmlFor={identifier}>{labelText}</label>
    </div>
  );
};

export default React.memo(VtmnRadioButton);
