import * as React from 'react';
import '@vtmn/css-button';

export interface VtmnButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
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
  /**
   * The value of the optional icon.
   * @default undefined
   **/
  icon?: string;
}

export const VtmnButton: React.FC<VtmnButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      className={`vtmn-btn vtmn-btn_variant--${variant} vtmn-btn_size--${size} ${
        className ? className : ''
      }
      ${icon && !children && 'vtmn-btn_with-only-icon'}`}
      {...props}>
      {icon && <i className={`vtmx-${icon}`} />}
      {children}
    </button>
  );
};

export default React.memo(VtmnButton);
