import * as React from 'react';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { VtmnIconColor, VtmnIconSize } from './types';

export interface VtmnIconProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The size of the icon in pixels.
   * @default 24
   **/
  size?: VtmnIconSize;
  /**
   * The color of the icon.
   * @default 'black'
   **/
  color?: VtmnIconColor;
  /**
   * The value of the icon.
   **/
  value: VitamixId;
  /**
   * The aria-label of the icon.
   **/
  ariaLabel?: string;
}

export const Icon: React.FC<VtmnIconProps> = ({
  size = 24,
  color = 'black',
  value,
  ariaLabel,
  className,
  style,
  ...props
}) => (
  <span
    className={`vtmx-${value} ${className ? className : ''}`}
    style={{ fontSize: size, color: `var(--vtmn-color_${color})`, ...style }}
    aria-label={ariaLabel ? ariaLabel : value}
    {...props}></span>
);

export default React.memo(Icon);
