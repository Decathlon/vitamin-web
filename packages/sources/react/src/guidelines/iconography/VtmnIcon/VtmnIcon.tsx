import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import * as React from 'react';
import { VtmnIconColor, VtmnIconSize, VtmnIconVariant } from './types';
import { retrieveSemanticColor } from './utils';

export interface VtmnIconProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The size of the icon in pixels.
   * @defaultValue 24
   **/
  size?: VtmnIconSize;
  /**
   * The legacy color of the icon.
   * @defaultValue undefined
   * @deprecated use the "variant" prop instead
   **/
  color?: VtmnIconColor;
  /**
   * The variant of the icon.
   * @defaultValue 'default'
   */
  variant?: VtmnIconVariant;
  /**
   * The value of the icon.
   **/
  value: VitamixId;
}

export const VtmnIcon: React.FC<VtmnIconProps> = ({
  size = 24,
  color,
  variant = 'default',
  value,
  className,
  style,
  ...props
}) => {
  const getIconColor = () => {
    let iconColor = undefined;
    if (color) {
      iconColor = `var(--vtmn-color_${color})`;
    } else {
      iconColor = `var(--vtmn-semantic-color_${retrieveSemanticColor(
        variant,
      )})`;
    }

    return iconColor;
  };

  return (
    <span
      className={`vtmx-${value} ${className ? className : ''}`}
      style={{
        fontSize: size,
        color: getIconColor(),
        ...style,
      }}
      {...props}
    ></span>
  );
};

const MemoVtmnIcon = React.memo(VtmnIcon);

MemoVtmnIcon.displayName = 'VtmnIcon';

export default MemoVtmnIcon;
