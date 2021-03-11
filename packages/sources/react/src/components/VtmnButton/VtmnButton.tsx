import * as React from 'react';
import '@vtmn/css-button';

export interface VtmnButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
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

export const VtmnButton = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}: VtmnButtonProps) => {
  return (
    <button
      className={`vtmn-btn vtmn-btn_variant--${variant} vtmn-btn_size--${size} ${
        className ? className : ''
      }`}
      {...props}>
      {children}
    </button>
  );
};

export default React.memo(VtmnButton);
