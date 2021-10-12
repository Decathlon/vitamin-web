import * as React from 'react';
import clsx from 'clsx';

import '@vtmn/css-text-input/dist/index-with-vars.css';
import { VtmnIcon } from '../VtmnIcon';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

type VtmnTextInputAdditionalProps = {
  /**
   * ID of the input
   * @type {string}
   */
  identifier: string;

  /**
   * Label text linked to the input
   * @type {string}
   */
  labelText?: string;

  /**
   * Helper text to help the user
   * @type {string}
   * @defaultValue undefined and therefore not displayed by default
   */
  helperText?: string;

  /**
   * Placeholder
   * @type {string}
   */
  placeholder?: string;

  /**
   * Icon to display inside text input
   * @type {VitamixId}
   * @default undefined and therefore not displayed by default
   */
  icon?: VitamixId;

  /**
   * Is a TextArea
   * @type {boolean}
   * @defaultValue false (Input)
   */
  multiline?: boolean;

  /**
   * Whether input is successful or not
   * @type {boolean}
   * @defaultValue false
   */
  valid?: boolean;

  /**
   * Whether input is in error or not
   * @type {boolean}
   * @defaultValue false
   */
  error?: boolean;
};

type VtmnTextInputMultiline = VtmnTextInputAdditionalProps & {
  multiline: true;
} & React.ComponentPropsWithoutRef<'textarea'>;
type VtmnTextInputSingleLine = VtmnTextInputAdditionalProps & {
  multiline?: false;
} & React.ComponentPropsWithoutRef<'input'>;

export type VtmnTextInputProps =
  | VtmnTextInputMultiline
  | VtmnTextInputSingleLine;

export const VtmnTextInput = ({
  className,
  disabled = false,
  error = false,
  helperText,
  icon = undefined,
  identifier,
  labelText,
  placeholder,
  valid = false,
  ...props
}: VtmnTextInputProps) => {
  return (
    <>
      {labelText && (
        <label className="vtmn-text-input_label" htmlFor={identifier}>
          {labelText}
        </label>
      )}
      {props.multiline ? (
        <textarea
          className={clsx('vtmn-text-input', className, {
            'vtmn-text-input--error': error,
            'vtmn-text-input--valid': valid,
          })}
          id={identifier}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      ) : (
        <div className="vtmn-text-input_container">
          <input
            className={clsx(
              'vtmn-text-input',
              className,
              { 'vtmn-text-input--valid': valid && !disabled },
              { 'vtmn-text-input--error': error && !disabled },
            )}
            id={identifier}
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            {...props}
          />
          {icon && <VtmnIcon value={icon} size={20} />}
        </div>
      )}
      {helperText && (
        <p
          className={clsx('vtmn-text-input_helper-text', className, {
            'vtmn-text-input_helper-text--error': error,
          })}>
          {helperText}
        </p>
      )}
    </>
  );
};

export default React.memo(VtmnTextInput);
