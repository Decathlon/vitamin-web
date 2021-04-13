import * as React from 'react';
import clsx from 'clsx';

import '@vtmn/css-text-input';

export interface VtmnTextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label text linked to the input
   * @type {string}
   */
  label: string;

  /**
   * Helper text to help the user
   * @type {string}
   */
  helperText?: string;

  /**
   * Whether input is successful or not
   * @type {boolean}
   */
  valid?: boolean;

  /**
   * Whether input is in error or not
   * @type {boolean}
   */
  error?: boolean;
}

export const VtmnTextInput = ({
  className,
  disabled = false,
  error = false,
  helperText,
  id,
  label,
  placeholder,
  valid = false,
  ...props
}: VtmnTextInputProps) => {
  return (
    <>
      <label className="vtmn-text-input_label" htmlFor={id}>
        {label}
        <input
          className={clsx(
            'vtmn-text-input',
            className,
            { 'vtmn-text-input--valid': valid && !disabled },
            { 'vtmn-text-input--error': error && !disabled },
          )}
          id={id}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      </label>
      {helperText && (
        <p className="vtmn-text-input_helper-text">{helperText}</p>
      )}
    </>
  );
};

export default React.memo(VtmnTextInput);
