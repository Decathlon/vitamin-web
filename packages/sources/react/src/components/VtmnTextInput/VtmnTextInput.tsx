import * as React from 'react';
import '@vtmn/css-button';

export interface VtmnTextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the text input.
   * @default 'enabled'
   */
  variant?:
    | 'enabled'
    | 'hover'
    | 'focus'
    | 'active'
    | 'valid'
    | 'error'
    | 'disabled';
  /**
   * The size of the text input.
   * @default 'undefined'
   */
  icon?: string;
}

export const VtmnTextInput: React.FC<VtmnTextInputProps> = ({
  variant = 'enabled',
  children,
  className,
  ...props
}) => {
  return (
    <input className={`vtmn-text-input--${variant}`} {...props}>
      {children}
    </input>
  );
};

export default React.memo(VtmnTextInput);
