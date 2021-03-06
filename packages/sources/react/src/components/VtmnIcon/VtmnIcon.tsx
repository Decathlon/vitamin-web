import * as React from 'react';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

export interface VtmnIconProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The size of the icon in pixels.
   * @default 24
   **/
  size?: 16 | 24 | 32 | 64;
  /**
   * The color of the icon.
   * @default 'black'
   **/
  color?:
    | 'black'
    | 'brand-digital'
    | 'white'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';
  /**
   * The value of the icon.
   **/
  value: VitamixId;
}

export const Icon: React.FC<VtmnIconProps> = ({
  size = 24,
  color = 'black',
  value,
  className,
  style,
  ...props
}) => (
  <i
    className={`vtmx-${value} ${className ? className : ''}`}
    style={{ fontSize: size, color: `var(--vtmn-color_${color})`, ...style }}
    {...props}
  />
);

export default React.memo(Icon);
