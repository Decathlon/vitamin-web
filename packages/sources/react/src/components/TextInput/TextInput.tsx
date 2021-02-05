import * as React from 'react';
import '@vtmn/css-text-input';
import classNames from 'classnames';
import { TextInputMessage } from './TextInputMessage/Index';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  /**
   * The helper message to display on the bottom of `input` element.
   * @default empty
   **/
  helperText?: string;
  /**
   * If this boolean is true it will show a `textarea` instead of an `input`.
   * @default false
   **/
  isMultiline?: boolean;
  /**
   * If this boolean is true it will show to user that there is something wrong.
   * @default false
   **/
  isError?: boolean;
  /**
   * If this boolean is true it will show to user that the given content is correct.
   * @default false
   **/
  isValid?: boolean;
  /**
   * The id of the `input` element in order to link to its label.
   **/
  id: string;
  /**
   * The label to display on the top of `input` element.
   **/
  label: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  children,
  className,
  disabled,
  helperText,
  id,
  isMultiline = false,
  isError = false,
  isValid = false,
  label,
  placeholder,
  ...props
}) => (
  <div className="vtmn-txt-input">
    <label htmlFor={id}>{label}</label>
    <div
      className={classNames('vtmn-txt-input_container', {
        'vtmn-txt-input_container-invalid': isError,
        'vtmn-txt-input_container-valid': isValid,
      })}>
      {isMultiline ? (
        <textarea
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          {...props}></textarea>
      ) : (
        <input
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
    <TextInputMessage helperText={helperText} isError={isError} />
  </div>
);

export default React.memo(TextInput);
