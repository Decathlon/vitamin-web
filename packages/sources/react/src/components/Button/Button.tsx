import * as React from 'react';
import '@vtmn/css-button';
import classNames from 'classnames';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * That variant of the button.
   * @default 'primary'
   */
  variant?:
    | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large' | 'stretched';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  disabled,
  ...props
}) => (
  <button
    className={classNames(className, 'vtmn-btn', {
      [`vtmn-btn_variant--${variant}`]: variant,
      [`vtmn-btn_size--${size}`]: size && size !== 'medium',
      'vtmn-btn_disabled': disabled,
    })}
    disabled={disabled}
    {...props}>
    {children}
  </button>
);

export default React.memo(Button);
