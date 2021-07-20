import * as React from 'react';

import '@vtmn/css-radio-button';

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
   * @default undefined
   */
  labelText?: string;

  /**
   * Name of the radio.
   * @type {string}
   * @default undefined
   */
  name?: string;

  /**
   * Label text linked to the radio.
   * @type {string}
   * @default null
   */
  value?: string;

  /**
   * Label text linked to the radio.
   * @type {boolean}
   * @default false
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
  name,
  value,
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
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <label htmlFor={identifier}>{labelText}</label>
    </div>
  );
};

export default React.memo(VtmnRadioButton);
