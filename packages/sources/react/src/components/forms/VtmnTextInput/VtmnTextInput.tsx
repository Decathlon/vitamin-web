import * as React from 'react';
import '@vtmn/css-text-input';
import clsx from 'clsx';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';
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
   * @defaultValue undefined
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
   * @defaultValue undefined
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

  /**
   * Called when icon is clicked
   * @type {React.MouseEventHandler}
   * @defaultValue undefined
   */
  onIconClick?: React.MouseEventHandler;

  /**
   * Classes to be applied to the label
   * @type {string}
   */
  labelClassName?: string;

  /**
   * Props to be spreaded to the label
   * @type {object}
   */
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
};

export type VtmnTextInputProps = React.ComponentPropsWithoutRef<'textarea'> &
  React.ComponentPropsWithoutRef<'input'> &
  VtmnTextInputAdditionalProps;

export const VtmnTextInput = React.forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  VtmnTextInputProps
>(
  (
    {
      className,
      disabled = false,
      error = false,
      helperText,
      icon = undefined,
      identifier,
      labelText,
      placeholder,
      valid = false,
      onIconClick,
      labelClassName,
      labelProps,
      ...props
    },
    ref,
  ) => {
    const { multiline, ...rest } = props;
    return (
      <>
        {labelText && (
          <label
            className={`vtmn-text-input_label ${labelClassName || ''}`}
            htmlFor={identifier}
            {...labelProps}
          >
            {labelText}
          </label>
        )}
        {multiline ? (
          <textarea
            className={clsx('vtmn-text-input', className, {
              'vtmn-text-input--error': error,
              'vtmn-text-input--valid': valid,
            })}
            id={identifier}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={(error && !disabled) || undefined}
            aria-describedby={
              (helperText && `${identifier}-helper-text`) || undefined
            }
            ref={ref}
            {...rest}
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
              aria-invalid={(error && !disabled) || undefined}
              aria-describedby={
                (helperText && `${identifier}-helper-text`) || undefined
              }
              ref={ref}
              {...rest}
            />
            {icon && <VtmnIcon value={icon} onClick={onIconClick} />}
          </div>
        )}
        {helperText && (
          <p
            id={`${identifier}-helper-text`}
            className={clsx('vtmn-text-input_helper-text', className, {
              'vtmn-text-input_helper-text--error': error,
            })}
          >
            {helperText}
          </p>
        )}
      </>
    );
  },
);

const MemoVtmnTextInput = React.memo(VtmnTextInput);

MemoVtmnTextInput.displayName = 'VtmnTextInput';

export default MemoVtmnTextInput;
